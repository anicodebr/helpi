import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Animated, Text, Easing } from 'react-native'
import Svg, { Circle, Line } from 'react-native-svg';
import PropTypes from 'prop-types';

function Stepper(props){

  const styles = StyleSheet.create({})

  const [fadeAnim] = useState(new Animated.Value(props.size));
  const [fadeAnimV, setfadeAnimV] = useState(fadeAnim._value);
  const [stepComponents, setStepComponents] = useState([]);

  useEffect(() => {
    if(stepComponents.length > 0){
      go()
    }
  }, [props.step]);

  useEffect(() => {
    createSteps();
  }, [])

  const go = () => {
    if(props.step > -1 && props.step <= props.steps){
      for (let i = 0; i < stepComponents.length; i++) {
        if(props.step <= i){
          const valueSize = props.renderCircle ? props.size : 0;
          const valueSized = props.renderCircled ? props.sized : 0;
          Animated.timing(stepComponents[i].sValue, {
            toValue: props.step < i ? valueSized : valueSize,
            duration: props.duration,
            easing: props.animationEasing
          }).start();
        }
      }
      if (props.renderline){
        Animated.timing(fadeAnim, {
          toValue: (props.step * (props.width + diametro) + props.size),
          duration: props.duration,
          easing: props.animationEasing
        }).start((end) => {
          setfadeAnimV(fadeAnim._value);
          if(props.onFinish){
              props.onFinish();
          }
        });
      }
    }
  };

  const AnimatedLine = Animated.createAnimatedComponent(Line)
  const AnimatedCircle = Animated.createAnimatedComponent(Circle)

  function createSteps(){
    setStepComponents([])
    for(let i=0; i < props.steps; i++){
      setStepComponents(prevArray => [...prevArray, 
        {
          stepID: i,
          sValue: new Animated.Value(props.sized)
        }
      ])
    }
  }

  const diametro = (props.size * 2);
  const diametrod = (props.sized * 2);

  function returnCircleColor(step, id){
    if(step === id){
      return props.circleColor
    }else{
      if(step > id){
        return props.circleColorp
      }else{
        if(step < id){
          return props.circleColord
        }
      }
    }
  }

    return (
      <Svg height={diametro} width={diametro + ((diametro + props.width) * (props.steps - 1))}>
        {props.renderlined ? 
        <AnimatedLine x1={props.size} y1={props.size} x2={diametrod + ((diametro + props.width) * (props.steps - 1))} y2={props.size} stroke={props.lineColord} strokeWidth={props.lineSized} /> 
        : null}
        {props.renderline ?         
        <AnimatedLine x1={props.size} y1={props.size} x2={fadeAnim} y2={props.size} stroke={props.lineColor} strokeWidth={props.lineSize} />
        : null}
        {stepComponents.map((step, key) => {
          const childCalc = props.size + ((diametro + props.width) * (key));
          switch (key) {
            case 0:
              return <AnimatedCircle key={key} cx={props.size} cy={props.size} r={new Animated.Value(props.size)} fill={returnCircleColor(props.step, step.stepID)}/>
            case props.steps - 1:
              return <AnimatedCircle key={key} cx={childCalc} cy={props.size} r={step.sValue} fill={returnCircleColor(props.step, step.stepID)}/>
            default:
              return <AnimatedCircle key={key} cx={childCalc} cy={props.size} r={step.sValue} fill={returnCircleColor(props.step, step.stepID)}/>
          } 
        })}
      </Svg>
    )
}

Stepper.defaultProps = {
  steps: 3,
  step: 0,
  size: 12,
  sized: 10,
  lineSize: 6,
  lineSized: 3,
  width: 15,
  lineColord: "grey",
  lineColor: "green",
  circleColor: "green",
  circleColorp: "green",
  circleColord: "grey",
  renderlined: true,
  renderline: true,
  renderCircle: true,
  renderCircled: true,
  duration: 800,
  animationEasing: Easing.out(Easing.exp)
}

Stepper.propTypes = {
  steps: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.number,
  sized: PropTypes.number,
  lineSize: PropTypes.number,
  lineSized: PropTypes.number,
  width: PropTypes.number,
  lineColord: PropTypes.string,
  lineColor: PropTypes.string,
  circleColor: PropTypes.string,
  circleColord: PropTypes.string,
  circleColorp: PropTypes.string,
  renderlined: PropTypes.bool,
  renderline: PropTypes.bool,
  renderCircle: PropTypes.bool,
  renderCircled: PropTypes.bool,
  duration: PropTypes.number,
  onFinish: PropTypes.func,
  animationEasing: PropTypes.func
}

export default Stepper
