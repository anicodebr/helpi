import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Inicio';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                gestureEnabled: false,
                headerTintColor: '#FFF',
            }}
            headerMode="none">
                <Stack.Screen
                    name="Inicio"
                    component={Main}
                    options={{ title: 'DevRadar' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Routes;