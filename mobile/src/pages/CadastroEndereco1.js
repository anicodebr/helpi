import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import InputTextIcon from '../components/inputTextIcon'

function CadastroEndereco1({navigation}) {
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
            width: '60%'
        },
        text1:{
            fontSize: theme.font.size.h2,
            fontFamily: theme.font.type.light,
            marginTop: 20,
            textAlign: "center",
            paddingHorizontal: 20
        },
        button1:{
            marginTop: 50,
            width: '80%',
            height: 50,   
        },
        input1:{
            width: "80%",
            marginTop: 30
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/mapa.png')} />
                <Text   style={styles.text1}>Onde você gostaria de receber suas compras?</Text>
                <InputTextIcon 
                    placeHolder="Endereço com número" 
                    containerStyle={styles.input1} 
                    onSubmitEditing={() => {navigation.navigate("CadastroEndereco2")}}
                />
            </View>
        </View>
    )
}

export default CadastroEndereco1
