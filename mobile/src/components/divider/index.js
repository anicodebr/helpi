import React from 'react'
import { View, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import PropTypes from 'prop-types';

function Divider(props){
    const styles = StyleSheet.create({
        container:{
            width: "100%",
            paddingHorizontal: "5%"
        }
    })
    return (
        <View style={[ styles.container ,props.style]}>
            <Svg height={props.strokeWidth} width={props.width}>
                <Line 
                    opacity={0.12} 
                    x1={0} 
                    y1={props.strokeWidth / 2} 
                    x2={props.width} 
                    y2={props.strokeWidth / 2} 
                    stroke="#000" 
                    strokeWidth={props.strokeWidth} />
            </Svg>
        </View>
    )
}

Divider.defaultProps = {
    strokeWidth: 1,
    width: "100%"
}

Divider.propTypes = {
    strokeWidth: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
}

export default Divider
