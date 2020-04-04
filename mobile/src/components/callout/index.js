import React, {useContext} from  'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeContext } from '../../theme';
import Svg, { Polygon } from 'react-native-svg';

function Callout(props){
    const theme = useContext(ThemeContext);
    const styles = StyleSheet.create({
        container:{

        },
        callout:{
            backgroundColor: theme.color.background,
            paddingHorizontal: 20,
            borderRadius: 10,
            elevation: theme.style.elevation,
        },
        header:{
            textAlign: "center",
            marginTop: 5,
            fontSize: theme.font.size.h3
        },
        content:{
            textAlign: "center",
            fontSize: theme.font.size.h3_5,
            color: theme.font.color.grey,
            marginBottom: 10
        },
        polygon:{
            elevation: theme.style.elevation,
            alignItems: "center",
            width: "100%",
        }
    });
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.callout}>
                <Text style={styles.header}>{props.title}</Text>
                <Text style={styles.content}>{props.details}</Text>
            </View>
            <View style={styles.polygon}>
                <Svg height="100" width="30">
                <Polygon
                    points="0,0 15,15 30,0"
                    fill={theme.color.background}
                    stroke={theme.color.background}
                    strokeWidth="1"
                />
                </Svg>
            </View>
        </View>
    )
}

export default Callout
