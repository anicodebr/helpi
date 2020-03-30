import React, {useContext} from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {ThemeContext} from '../../theme';

function Button(props){

    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        button: {
            alignContent: "center",
            justifyContent: "center",
            elevation: theme.style.elevation,
            backgroundColor: theme.color.primary,
            borderRadius: 50,
        },
        buttonO: {
            alignContent: "center",
            justifyContent: "center",
            elevation: theme.style.elevation,
            backgroundColor: theme.color.background,
            borderStyle: "solid",
            borderWidth: 4,
            borderRadius: 50,
            borderColor: theme.color.primary,
        },
        text: {
            padding: 15,
            color: theme.font.color.secondary,
            fontSize: theme.font.size.h3,
            textAlign: 'center'
        },
        textO: {
            padding: 15,
            color: theme.font.color.primary,
            fontSize: theme.font.size.h3,
            textAlign: 'center'
        }
    })

    return (
    <View style={props.style}>
        <TouchableOpacity style={props.outlined ? styles.buttonO : styles.button} onPress={props.onPress}>
            <Text style={props.outlined ? styles.textO : styles.text}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Button
