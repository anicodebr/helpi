import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import IconButton from '../components/iconButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import Button from '../components/button';
import FooterInfo from '../components/footerInfo';
import InputText from '../components/inputText';


function Login2({navigation}) {
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.color.background,
        },
        backIcon: {
            position: "absolute",
            top:  5 + getStatusBarHeight(),
            left: 20
        },
        layout: {
            paddingTop:  30 + getStatusBarHeight(),
            width: '100%',
            height: '100%',
            alignItems: "center",
        },
        image:{
            height: '35%',
            width: '65%'
        },
        text1:{
            fontSize: theme.font.size.h1,
            fontFamily: theme.font.type.light,
            marginTop: 5,
        },
        text2:{
            textAlign: "center",
            fontSize: theme.font.size.h3,
            marginTop: 10,  
            paddingHorizontal: 30,    
        },
        button1:{
            width: '80%',
            height: 50,
            marginTop: 50,
        },
        edit:{
            marginTop: 30,
            width: '80%',
        }
    });

    function onSend(){
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                { name: 'Inicio' },
                ],
            })
        )
    }

    return (
        <View style={styles.container}>
            <IconButton style={styles.backIcon} size={60} onPress={() => {navigation.goBack()}}/>
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/login2.png')} />
                <Text   style={styles.text1}>Calma calma</Text>
                <Text   style={styles.text2}>Não criemos pânico! Basta informar seu email que entraremos em contato com o número registrado para garantir que esta é sua conta!</Text>
                <InputText style={styles.edit} placeHolder="E-mail ou CPF"/>
                <Button style={styles.button1} text="Enviar" onPress={onSend}/>
                <FooterInfo />
            </View>
        </View>
    )
}

export default Login2
