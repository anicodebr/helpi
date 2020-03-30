import React, {useContext} from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../../theme'

function InputText(props){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        input:{
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderColor: theme.color.primary,
            fontSize: theme.font.size.h3,
            color: theme.font.color.primary,
            paddingBottom: 10,
            paddingHorizontal: 20
        }
    })
    return (
        <View style={props.style}>
            <TextInput style={styles.input} placeholder={props.placeHolder}/>
        </View>
    )
}

export default InputText


