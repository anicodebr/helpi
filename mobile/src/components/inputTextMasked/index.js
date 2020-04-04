import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import { ThemeContext } from '../../theme'
import { TextInputMask } from 'react-native-masked-text'

function InputTextMasked(props){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        input:{
            borderStyle: "solid",
            borderBottomWidth: props.greyed ? 0 : 2,
            borderColor: theme.color.primary,
            fontSize: theme.font.size.h3,
            color: theme.font.color.primary,
            paddingBottom: 10,
            paddingHorizontal: 20
        }
    })
    return (
            <TextInputMask 
                {...props}
                style={[styles.input, props.style]} 
                placeholder={props.placeHolder}
            />
    )
}

export default InputTextMasked


