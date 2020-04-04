import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ThemeContext } from '../theme';
import EnderecoView from '../components/listrow'
import Button from '../components/button'
import Callout from '../components/callout'
import MapView, {Marker} from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

function CadastroEndereco3({navigation}) {
    const theme = useContext(ThemeContext);
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition(){
            const { granted } = await requestPermissionsAsync();
            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                
                const {latitude, longitude} = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                })
            }
        }
        loadInitialPosition();
    }, [])

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.color.background,
        },
        layout: {
            paddingTop:  5 + getStatusBarHeight(),
            width: '100%',
            height: '100%',
            alignItems: "center",
        },
        endereco:{
            width: "100%",
            paddingHorizontal: 15
        },
        map:{
            flex: 1,
            width: "100%",
            height: "100%"
        },
        button:{
            position: "absolute",
            bottom: 10,
            width: "90%",
            padding: 20,
            height: 90,
        },
        mapCenter:{
            position: "absolute",
            top: "37%",
            alignItems: "center",
        },
        marker:{   
            marginTop: 10,   
            width: 43,
            height: 60,
        },
        callout:{
            width: 260,
            height: 80,
        }
    })

    if(!currentRegion){
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <View style={styles.endereco}>
                    <EnderecoView />
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={currentRegion}
                    onRegionChange={setCurrentRegion}
                >
                    <Marker coordinate={currentRegion}>
                    </Marker>
                </MapView>
                <View style={styles.mapCenter}>
                    <Callout title="Você está aqui?" details="Ajuste sua localização" style={styles.callout}/>
                    <Image  style={styles.marker} source={require('../assets/mapmarker.png')} />
                </View>
                <Button style={styles.button} text="Confirmar localização" onPress={() => navigation.navigate("CadastroEndereco4")}/>
            </View>
        </View>
    )
}

export default CadastroEndereco3
