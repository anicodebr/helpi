import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Button from '../components/button';


function Main(){
    return (
        <View style={styles.container}>
            <Image  style={styles.image} source={require('../media/undraw/signIn.png')} />
            <Button style={styles.button} text="Quero ajudar!"/>
            <Button style={styles.button} text="Fazer Compras"/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
    width: 350, 
    height: 300, 
    marginTop: 40,
    marginBottom: 40
    },
    button: {
        width: 300, 
        marginBottom: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
})

export default Main