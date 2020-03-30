import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './pages/Inicio';
import Login1 from './pages/Login1';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                gestureEnabled: false,
                headerTintColor: '#FFF',
                headerShown: false,
            }}
            >
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
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Routes;