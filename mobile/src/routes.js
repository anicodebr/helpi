import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: false,
                headerTintColor: '#FFF',
            }}>
                <Stack.Screen
                    name="Home"
                    component={Main}
                    options={{ title: 'DevRadar' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Routes;