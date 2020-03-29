import React, {useContext} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/button';
import {ThemeContext} from '../theme';

function Main(){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        image: {
            width: 120, 
            height: 170, 
            marginTop: '20%',
            marginBottom: 20,
        },
        image2: {
            width: 165, 
            height: 80, 
            marginTop: 20,
            marginBottom: 20,
        },
        text1:{
            textAlign: "center",
            fontSize: theme.font.size.h3,
            width: '80%',
            marginBottom: '10%'
        },
        text2:{
            textAlign: "center",
            fontSize: theme.font.size.little,
            width: '100%',
            position: 'absolute',
            bottom: 20 
        },
        button: {
            width: 280, 
            marginBottom: 20,
            height: 50,
        },
        container: {
            flex: 1,
            backgroundColor: theme.color.background,
            alignItems: 'center',
        },
    })

    return (
        <View style={styles.container}>
            <Image  style={styles.image} source={require('../assets/Logo.png')} />
            <Image  style={styles.image2} source={require('../assets/Nome.png')} />
            <Text   style={styles.text1}>Tá precisando de uma ajudinha? Pede um helpi!</Text>
            <Button style={styles.button} text="Cadastro"/>
            <Button style={styles.button} outlined text="Já tenho uma conta"/>
            <Button style={styles.button} outlined text="Quero ajudar!"/>
            <Text   style={styles.text2}>2020 @ Todos os direitos reservados</Text>
        </View>
    )
}

export default Main