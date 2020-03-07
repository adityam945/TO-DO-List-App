import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
//can change onDelete
const ReminderItem = props => {
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}> 
        <View style={styles.ReminderList}>
             <Text style={styles.textLayout}>{props.title}</Text>
           </View>
           </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    ReminderList: {
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: 300,
        alignItems: 'center',
       
    },
    textLayout: {
        fontSize: 20,
        color: 'black'

    }
})

export default ReminderItem;