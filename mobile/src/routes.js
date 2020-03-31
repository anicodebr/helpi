import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import Inicio from './pages/Inicio';
import Login1 from './pages/Login1';
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';
import CadastroUser1 from './pages/CadastroUser1';

const Stack = createStackNavigator();

const generalScreenOptions = {
    gestureEnabled: false,
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

//Separei em funções caso futuramente fique grande o
//o suficiente para ter que dividir em arquivos
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
    </Stack.Navigator>
    )
}

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="CadastroUserNavigator"
            screenOptions={{...generalScreenOptions}}>
                <Stack.Screen name="InicioNavigator"        component={InicioRoutes} />
                <Stack.Screen name="CadastroUserNavigator"  component={CadastroUserRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Routes;