import React, {useContext, useState} from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import InputTextButton from '../components/inputTextButton'
import List from '../components/list'

function CadastroEndereco2({navigation}) {
    const theme = useContext(ThemeContext);

    const [pesquisa, setPesquisa] = useState("");

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
        input1:{
            width: "100%",
            paddingHorizontal: 15
        },
        list:{
            width: "100%",
            marginTop: 15
        }
    })

    function selectEndereco(item){
        console.log(item);
        navigation.navigate("CadastroEndereco3");
    }

    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <View style={styles.input1}>
                    <InputTextButton 
                        value={pesquisa}
                        placeHolder="Endereço com número" 
                        onSubmitEditing={() => {navigation.navigate("")}}
                        onChangeText={text => setPesquisa(text)}
                        onPress={() => setPesquisa("")}
                        />
                </View>
                <List style={styles.list} onPress={selectEndereco}/>
            </View>
        </View>
    )
}

export default CadastroEndereco2
