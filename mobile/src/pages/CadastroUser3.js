import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import IconButton from '../components/iconButton';

function CadastroUser3({navigation}) {
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
            paddingTop:  20 + getStatusBarHeight(),
            width: '100%',
            height: '100%',
            alignItems: "center",
        },
        image:{
            height: '30%',
            width: '71%'
        },
        text1:{
            fontSize: theme.font.size.h1,
            fontFamily: theme.font.type.light,
            marginTop: 30,
        },
        text2:{
            fontSize: theme.font.size.h3, 
            fontFamily: theme.font.type.light,
            paddingHorizontal: "20%", 
            textAlign: "center",
            marginTop: 50,      
        },
        button1:{
            marginTop: 50,
            width: '80%',
            height: 50,   
        },
        button2:{
            marginTop: 15,
            width: '80%',
            height: 50, 
        },
    })

    return (
        <View style={styles.container}>
            <IconButton style={styles.backIcon} size={60} onPress={() => {navigation.goBack()}}/>
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/cadastroComoFunciona.png')} />
                <Text   style={styles.text1}>Ajuda</Text>
                <Text   style={styles.text2}>texto sinopse do app</Text>
            </View>
        </View>
    )
}

export default CadastroUser3
