import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import IconButton from '../components/iconButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import Button from '../components/button';
import FooterInfo from '../components/footerInfo';
import InputText from '../components/inputText';

function Login1({navigation}) {
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
            paddingTop:  5 + getStatusBarHeight(),
            width: '100%',
            height: '100%',
            alignItems: "center",
        },
        image:{
            height: '30%',
            width: '60%'
        },
        text1:{
            fontSize: theme.font.size.h1,
            fontFamily: theme.font.type.light,
            marginTop: 5,
        },
        text2:{
            fontSize: theme.font.size.h3, 
            fontFamily: theme.font.type.light, 
            marginTop: 10,      
        },
        button1:{
            marginTop: 30,
            width: '80%',
            height: 50,   
        },
        button2:{
            marginTop: 15,
            width: '80%',
            height: 50, 
        },
        edit:{
            marginTop: 30,
            width: '80%',
        }
    })

    return (
        <View style={styles.container}>
            <IconButton style={styles.backIcon} size={60} onPress={() => {navigation.goBack()}}/>
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/login.png')} />
                <Text   style={styles.text1}>Login</Text>
                <Text   style={styles.text2}>É bom te ver por aqui novamente!</Text>
                <InputText style={styles.edit} placeHolder="E-mail ou CPF"/>
                <InputText style={styles.edit} secureTextEntry={true} placeHolder="Senha"/>
                <Button style={styles.button1} text="Login"/>
                <Button style={styles.button2} outlined text="Cadastrar" onPress={() => navigation.navigate('Login3')}/>
                <Button style={styles.button2} outlined text="Esqueci minha senha" onPress={() => navigation.navigate('Login2')}/>
                <FooterInfo />
            </View>
        </View>
    )
}

export default Login1
