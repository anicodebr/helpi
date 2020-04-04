import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import Button from '../components/button';

function CadastroUser2({navigation}) {
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.color.background,
        },
        layout: {
            paddingTop:  20 + getStatusBarHeight(),
            width: '100%',
            height: '100%',
            alignItems: "center",
        },
        image:{
            height: '28%',
            width: '70%'
        },
        text1:{
            fontSize: theme.font.size.h1,
            fontFamily: theme.font.type.light,
            marginTop: 50,
        },
        text2:{
            fontSize: theme.font.size.h3_5, 
            fontFamily: theme.font.type.light,
            paddingHorizontal: "20%", 
            textAlign: "center",
            marginTop: 5,      
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
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/cadastroCompleto.png')} />
                <Text   style={styles.text1}>Perfeito!</Text>
                <Text   style={styles.text2}>Pronto para começar a ter tudo na palma de sua mão?</Text>
                <Button style={styles.button1} text="Vamos lá!" onPress={() => navigation.navigate('CadastroEnderecoRoutes')}/>
                <Button style={styles.button2} outlined text="Como funciona?" onPress={() => navigation.navigate('CadastroUser3')}/>
            </View>
        </View>
    )
}

export default CadastroUser2
