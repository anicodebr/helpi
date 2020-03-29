import React, {useContext} from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import {ThemeContext} from '../../theme';

function Button(props){

    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        button: {
            alignContent: "center",
            justifyContent: "center",
            elevation: 3,
            backgroundColor: theme.color.primary,
            borderRadius: 50,
            width: '100%',
            height: '100%'
        },
        buttonO: {
            alignContent: "center",
            justifyContent: "center",
            elevation: 3,
            backgroundColor: theme.color.background,
            borderStyle: "solid",
            borderWidth: 4,
            borderRadius: 50,
            borderColor: theme.color.primary,
            height: '100%'
        },
        text: {
            padding: 15,
            color: theme.font.color.secondary,
            fontSize: 20,
            textAlign: 'center'
        },
        textO: {
            padding: 15,
            color: theme.font.color.primary,
            fontSize: 20,
            textAlign: 'center'
        }
    })

    return (
    <View style={props.style}>
        <TouchableOpacity style={props.outlined ? styles.buttonO : styles.button} >
            <Text style={props.outlined ? styles.textO : styles.text}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Button
