import React, {useContext, useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {ThemeContext} from '../theme';

function Inicio({navigation}){
    const theme = useContext(ThemeContext);
    
    const styles = StyleSheet.create({
        container: {
            paddingVertical:  40 + getStatusBarHeight(),
            flex: 1,
            backgroundColor: theme.color.background,
            alignItems: 'center',
        },
        text1:{
            textAlign: "left",
            fontSize: theme.font.size.h3,
            marginBottom: '10%'
        },
        stepsView:{
            paddingHorizontal: 30,
        }
    });

    return (
        <View style={styles.container}>

        </View>
    )
}

export default Inicio