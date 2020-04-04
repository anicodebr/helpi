import React, {useContext} from 'react'
import { ThemeContext } from '../../theme'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

function ListRow(props){
    const theme = useContext(ThemeContext);
    
    const styles = StyleSheet.create({
        rowContent:{
            paddingTop: 10,
            paddingBottom: 15,
            flexDirection: "row"
        },
        iconView:{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 15,
            opacity: 0.5
        },
        header:{
            fontSize: theme.font.size.h3,
        },
        description:{
            fontSize: theme.font.size.h3_5,
            color: theme.font.color.grey
        }
    })

    return (
        <View style={[styles.rowContent, props.style]}>
            <View style={styles.iconView}> 
                <Icon name="pin-drop" size={40}/>
            </View>
            <View style={styles.textView}> 
                <Text style={styles.header}>Header</Text>
                <Text style={styles.description}>Description</Text>
            </View>
        </View>
    )
}

export default ListRow
