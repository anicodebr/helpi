import React, {useContext} from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../theme'
import InputText from '../inputText';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

function InputTextButton(props){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container:{
            flexDirection: "row",
            elevation: theme.style.elevation,
            backgroundColor: theme.color.lightgrey,
            borderRadius: 5
        },
        input:{
            fontSize: theme.font.size.h3,
            paddingTop: 10,
            paddingBottom: 10,
            paddingHorizontal: 20,
            width: "90%",
            color: theme.font.color.black
        },
        button:{
            position: "absolute",
            width: 40,
            right: 0,
            alignSelf: "center"
        },
        icon:{
            opacity: 0.5,
        }

    })
    return (
        <View style={[styles.container, props.containerStyle]}>
            <InputText contained greyed {...props} style={[styles.input, props.inputStyle]} placeholder={props.placeHolder}/>
            <TouchableOpacity style={[styles.button, props.buttonStyle]} onPress={props.onPress}>
                <Icon 
                    style={[styles.icon, props.iconStyle]}
                    name={props.iconName} 
                    size={props.iconSize} 
                    color={ props.iconColor ? props.iconColor : theme.color.grey}
                />
            </TouchableOpacity>
        </View>
    )
}


InputTextButton.defaultProps = {
    iconName: "close",
    iconSize: 30,
    iconColor: "black"
}

InputTextButton.propTypes = {
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string
}

export default InputTextButton


