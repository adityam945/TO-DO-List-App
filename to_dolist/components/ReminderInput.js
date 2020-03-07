import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal } from 'react-native';




const ReminderInput = props => {
    const [enteredReminder, setEnteredReminder] = useState('');
    
    const ReminderInputHandler = (enteredText) =>{
        setEnteredReminder(enteredText);
      };

      const addReminderHadler = () => {
        props.onAddReminder(enteredReminder)
        setEnteredReminder('');
      };
    
    return(
    <Modal visible= {props.modalVisible} animationType='slide' >
    <View style = {styles.input_style}>
        <TextInput 
        placeholder = 'Enter new Reminder' 
        style= {styles.TextInput}
        onChangeText={ReminderInputHandler}
        value= {enteredReminder}
        />
        <View style={styles.buttonSize}>
         <Button title= "ADD"  onPress={addReminderHadler} />
         </View>
      </View>
      <View >
        <View style={styles.cancelButton}>  
        <Button title="Go Back" color= 'red'onPress={props.onCancel} />
        </View>
        </View>
      </Modal>
      );
};

const styles = StyleSheet.create({
    input_style: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      TextInput:{
        width: '80%',
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      cancelButton: {
        marginLeft: 288,
        width: '30%'
    
      },
      buttonSize:{
          width: '40%',
         
      }
        
})

export default ReminderInput;