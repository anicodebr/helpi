import React, {useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../../theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import TextInput from '../inputText';

function InputTextIcon(props){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container:{
            flexDirection: "row",
            borderStyle: "solid",
            borderBottomWidth: props.greyed ? 0 : 2,
            borderColor: theme.color.grey,
        },
        input:{
            fontSize: theme.font.size.h3,
            color: theme.font.color.primary,
            paddingBottom: 10,
            paddingHorizontal: 20,
            width: "90%"
        },
    })
    return (
        <View style={[styles.container, props.containerStyle]}>
            <TextInput {...props} style={[styles.input, props.inputStyle]} greyed placeholder={props.placeHolder}/>
            <Icon name={props.iconName} size={props.iconSize} color={ props.iconColor ? props.iconColor : theme.color.grey}/>
        </View>
    )
}

InputTextIcon.defaultProps = {
    iconName: "search",
    iconSize: 30,
    iconColor: "#BDBDBD"
}

InputTextIcon.propTypes = {
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string
}

export default InputTextIcon


