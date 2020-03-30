import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../theme'

const FooterInfo = () => {
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        text:{
            textAlign: "center",
            fontSize: theme.font.size.little,
            width: '100%',
            position: 'absolute',
            bottom: 20 
        },
    })
    return (
        <Text style={styles.text}>2020 @ Todos os direitos reservados</Text>
    )
}

export default FooterInfo
