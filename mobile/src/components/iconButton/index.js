import React, {useContext} from 'react'
import {ThemeContext} from '../../theme';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

function IconButton(props){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        default:{
            
        },
        button:{
            borderRadius: 50,
            flexDirection: "row",
            backgroundColor: theme.color.primary,
            width: props.size,
            height: props.size,
            elevation: theme.style.elevation,
        },
        text:{
            color: theme.font.color.secondary,
            fontSize: props.size * 0.7
        },
    })
    
    return (
        <View style={props.style || styles.default}>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Icon name="keyboard-arrow-left" size={props.size} color={theme.font.color.secondary}/>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

IconButton.defaultProps = {
    size: 60,
}

IconButton.propTypes = {
    textProp: PropTypes.string,
}

export default IconButton
