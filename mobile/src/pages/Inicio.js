import React, {useContext} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from '../components/button';
import FooterInfo from '../components/footerInfo';
import {ThemeContext} from '../theme';

function Inicio({navigation}){
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
    });

    return (
        <View style={styles.container}>
            <Image  style={styles.image} source={require('../assets/Logo.png')} />
            <Image  style={styles.image2} source={require('../assets/Nome.png')} />
            <Text   style={styles.text1}>Tá precisando de uma ajudinha? Pede um helpi!</Text>
            <Button style={styles.button} text="Entrar" onPress={() => {navigation.navigate('Login1')}}/>
            <FooterInfo />
        </View>
    )
}

export default Inicio