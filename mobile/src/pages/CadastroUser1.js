import React, {useContext, useState, useRef} from 'react';
import { StyleSheet, View, Text, BackHandler } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {ThemeContext} from '../theme';
import IconButton from '../components/iconButton';
import InputText from '../components/inputText';
import InputTextMasked from '../components/inputTextMasked';
import Stepper from '../components/stepper';
import ViewPager from '@react-native-community/viewpager'

function Inicio({navigation}){
    const theme = useContext(ThemeContext);
    const [actualStep, setActualStep] = useState(0);
    const [nome, setNome] = useState("");
    const [cpf, setcpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const viewpager = useRef(null);
    
    const styles = StyleSheet.create({
        container: {
            paddingVertical:  40 + getStatusBarHeight(),
            flex: 1,
            backgroundColor: theme.color.background,
            alignItems: 'center',
        },
        text1:{
            width: "100%",
            textAlign: "left",
            fontSize: theme.font.size.h3,
            paddingHorizontal: 20,
            marginTop: 30
        },
        text2:{
            width: "100%",
            textAlign: "left",
            fontSize: theme.font.size.h3,
            paddingHorizontal: 20,
            marginBottom: 20
        },
        textGreen:{
            color: theme.font.color.primary,
            fontFamily: theme.font.type.bold,
        },
        fbutton:{
            position: "absolute",
            right: 15,
            top: "60%"
        }, 
        stepsView:{
            paddingHorizontal: 30,
        },
        input1:{
            fontSize: theme.font.size.h2_5,
            width: "80%",
            fontFamily: theme.font.type.bold,
        }
    });

    function stepFoward(){
        if(actualStep < 4){
            viewpager.current.setPage(actualStep  + 1);
        }else{
            if(actualStep === 4){
                navigation.navigate('CadastroUser2') 
            }
        }
    }

    function pageSelected(e){
        setActualStep(e.nativeEvent.position);
    }

    BackHandler.addEventListener('hardwareBackPress', function() {
        if (actualStep > 0){
            viewpager.current.setPage(actualStep  - 1);
        }else{
            navigation.navigate('InicioNavigator')
        }        
        return true
      });

    return (
        <View style={styles.container}>
            <Stepper 
                steps={5} 
                width={40} 
                size={8}
                sized={7}
                step={actualStep} 
                renderline={false} 
                renderlined={false} 
                lineSize={2} 
                lineSized={5}
                circleColor={theme.color.primary}
                circleColord={theme.color.grey}
                circleColorp={theme.color.grey}
            />
            <ViewPager 
            initialPage={0} style={{height: "100%", width: "100%"}} onPageSelected={pageSelected} ref={viewpager}>
                <View key="1">
                    <Text style={styles.text1}>Oi, meu nome é <Text style={styles.textGreen}>helpi</Text></Text>
                    <Text style={styles.text2}>Como você gosta de ser chamado?</Text>
                    <InputText style={styles.input1} greyed placeHolder="Digite seu nome" onChangeText={setNome}/>
                </View>
                <View key="2">
                    <Text style={styles.text1}>Beleza, <Text style={styles.textGreen}>{nome}!</Text></Text>
                    <Text style={styles.text2}>Qual é o seu e-mail?</Text>
                    <InputText style={styles.input1} greyed placeHolder="example@gmail.com"/>
                </View>  
                <View key="3">
                    <Text style={styles.text1}>Qual é seu <Text style={styles.textGreen}>CPF?</Text></Text>
                    <Text style={styles.text2}>Seus dados estão seguros conosco.</Text>
                    <InputTextMasked 
                        type={'cpf'}
                        value={cpf}
                        style={styles.input1} 
                        onChangeText={text => setcpf(text)}
                        greyed 
                        placeHolder="000.000.000-00"
                    />
                </View> 
                <View key="4">
                    <Text style={styles.text1}>E o número do seu <Text style={styles.textGreen}>celular?</Text></Text>
                    <Text style={styles.text2}>Fique tranquilo, não iremos te incomodar</Text>
                    <InputTextMasked 
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={telefone}
                        style={styles.input1} 
                        onChangeText={text => setTelefone(text)}
                        greyed 
                        placeHolder="(xx)00000-0000"
                    />
                </View> 
                <View key="5">
                    <Text style={styles.text1}>Agora irei precisar que faça uma <Text style={styles.textGreen}>senha</Text>,</Text>
                    <Text style={styles.text2}>para sua segurança.</Text>
                    <InputText style={styles.input1} secureTextEntry={true} greyed placeHolder="Digite aqui"/>
                </View>               
            </ViewPager>
            <IconButton iconName="keyboard-arrow-right" style={styles.fbutton} onPress={stepFoward}/> 
        </View>
    )
}

export default Inicio