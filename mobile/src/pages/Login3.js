import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import IconButton from '../components/iconButton';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import Button from '../components/button';
import FooterInfo from '../components/footerInfo';
import InputText from '../components/inputText';


function Login3({navigation}) {
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
            fontFamily: theme.font.type.light,
            marginTop: 10,  
            paddingHorizontal: 30,    
        },
        button1:{
            width: '80%',
            height: 50,
            marginTop: 50,
        },
        button2:{
            width: '80%',
            height: 50,
            marginTop: 20,
        },
        edit:{
            marginTop: 30,
            width: '80%',
        }
    });

    return (
        <View style={styles.container}>
            <IconButton style={styles.backIcon} size={60} onPress={() => {navigation.goBack()}}/>
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/login.png')} />
                <Text   style={styles.text1}>Seha bem vindo!</Text>
                <Text   style={styles.text2}>Primeiro, o que gostaria de fazer?</Text>
                <Button style={styles.button1} text="Quero fazer pedidos" onPress={() => navigation.navigate('CadastroUserNavigator')}/>
                <Button style={styles.button2} outlined text="Quero ajudar!"/>
                <FooterInfo />
            </View>
        </View>
    )
}

export default Login3
