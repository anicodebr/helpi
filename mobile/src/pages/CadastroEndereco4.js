import React, {useContext} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import Button from '../components/button';
import EnderecoView from '../components/listrow';
import InputText from '../components/inputText'

function CadastroEndereco4({navigation}) {
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
            height: '30%',
            width: '60%'
        },
        button:{
            position: "absolute",
            bottom: 10,
            width: "90%",
            padding: 20,
            height: 90,
        },
        endereco:{
            padding: 20,
            width: "100%",            
        },
        input:{
            width: "80%",
            marginTop: 30,
            borderBottomColor: theme.color.grey
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <Image  style={styles.image} source={require('../assets/i/mapa2.png')} />
                <EnderecoView style={styles.endereco}/>
                <InputText style={styles.input} placeHolder="Complemento"/>
                <InputText style={styles.input} placeHolder="Endereço de Rua com número"/>
                <Button style={styles.button} text="Ir as compras" onPress={() => navigation.navigate("CadastroEndereco4")}/>
            </View>
        </View>
    )
}

export default CadastroEndereco4
