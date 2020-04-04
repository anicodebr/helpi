import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import Inicio from './pages/Inicio';
import Login1 from './pages/Login1';
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';
import CadastroUser1 from './pages/CadastroUser1';
import CadastroUser2 from './pages/CadastroUser2';
import CadastroUser3 from './pages/CadastroUser3';
import CadastroEndereco1 from './pages/CadastroEndereco1';
import CadastroEndereco2 from './pages/CadastroEndereco2';
import CadastroEndereco3 from './pages/CadastroEndereco3';
import CadastroEndereco4 from './pages/CadastroEndereco4';

const Stack = createStackNavigator();

const generalScreenOptions = {
    gestureEnabled: false,
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

//Separei em funções caso futuramente fique grande o
//o suficiente para ter que dividir em arquivos

// -------------------------------------- Rotas de Inicio ------------------------------------------
function InicioRoutes(){
    return(
    <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{...generalScreenOptions}}>
        <Stack.Screen
            name="Inicio"
            component={Inicio}
            options={{ title: 'Inicio' }}
        />
        <Stack.Screen
            name="Login1"
            component={Login1}
            options={{ title: 'Login' }}
        />
        <Stack.Screen
            name="Login2"
            component={Login2}
            options={{ title: 'Login - Recuperar Conta' }}
        />
        <Stack.Screen
            name="Login3"
            component={Login3}
            options={{ title: 'Login - Criar Conta' }}
        />
    </Stack.Navigator>
    )
}

// -------------------------------- Rotas de Cadastro de usuário -----------------------------------
function CadastroUserRoutes(){
    return (
    <Stack.Navigator
        initialRouteName="CadastroUser1"
        screenOptions={{...generalScreenOptions}}> 
        <Stack.Screen
            name="CadastroUser1"
            component={CadastroUser1}
            options={{ title: 'Cadastro - Processo de Usuário 1' }}
        /> 
        <Stack.Screen
            name="CadastroUser2"
            component={CadastroUser2}
            options={{ title: 'Cadastro - Processo de Usuário 2' }}
        /> 
        <Stack.Screen
            name="CadastroUser3"
            component={CadastroUser3}
            options={{ title: 'Cadastro - Processo de Usuário 2' }}
        /> 
    </Stack.Navigator>
    )
}

// -------------------------------- Rotas de Cadastro de Endereço -----------------------------------
function CadastroEnderecoRoutes(){
    return (
    <Stack.Navigator
        initialRouteName="CadastroEndereco1"
        screenOptions={{...generalScreenOptions}}
    > 
        <Stack.Screen
            name="CadastroEndereco1"
            component={CadastroEndereco1}
            options={{ title: 'Cadastro - Processo de Endereço 1' }}
        />
        <Stack.Screen
            name="CadastroEndereco2"
            component={CadastroEndereco2}
            options={{ title: 'Cadastro - Processo de Endereço 2' }}
        />
        <Stack.Screen
            name="CadastroEndereco3"
            component={CadastroEndereco3}
            options={{ title: 'Cadastro - Processo de Endereço 3' }}
        />
        <Stack.Screen
            name="CadastroEndereco4"
            component={CadastroEndereco4}
            options={{ title: 'Cadastro - Processo de Endereço 4' }}
        />
    </Stack.Navigator>
    )
}

// -------------------------------------- Main Router Render ----------------------------------------
function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="InicioNavigator"
            screenOptions={{...generalScreenOptions}}>
                <Stack.Screen name="InicioNavigator"        component={InicioRoutes} />
                <Stack.Screen name="CadastroUserNavigator"  component={CadastroUserRoutes} />
                <Stack.Screen name="CadastroEnderecoRoutes"  component={CadastroEnderecoRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Routes;