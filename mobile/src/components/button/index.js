import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

function Button(props){
    return (
    <View style={props.style}>
        <TouchableOpacity style={styles.button} >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
        elevation: 3,
        backgroundColor: '#66BB6A',
        borderRadius: 50,
        width: '100%'
    },
    text: {
        padding: 15,
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Button
