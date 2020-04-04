import React, {useContext} from 'react'
import { ThemeContext } from '../../theme'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import Divider from '../divider'
import ListRow from '../listrow'

function List(props){
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        row:{
            width: "100%",
        },
    })

    function renderItem(item){
        return (
            <View style={styles.row}>
                <TouchableOpacity onPress={() => props.onPress(item)}>
                    <ListRow/>
                </TouchableOpacity>
                <Divider width="100%" strokeWidth={1}/>
            </View>
        )
    }

    return (
    <FlatList style={props.style}
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={renderItem}
        
    />
    )
}

export default List
