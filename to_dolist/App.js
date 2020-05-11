import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Alert, Image, Text} from 'react-native';

import ReminderItem from './components/ReminderItem';
import ReminderInput from './components/ReminderInput';





//main exp
export default function App() {
  
  const [courseReminders, setCourseReminders] = useState([]);
  const [newReminder, setnewReminder] = useState(false);  

  
  const addReminderHandler = ReminderTitle => {    
if (ReminderTitle.length === 0) {
  return (
     Alert.alert(
       'Error',
       'Enter Reminder '
     )
  );
}

     setCourseReminders(currentReminders => [...courseReminders,
       {id: Math.random().toString(),
         value: ReminderTitle}]);   //'...' is called spread operator
         setnewReminder(false);
  };

  const removeReminderHandler = ReminderId =>{
    setCourseReminders(currentReminders =>{
      return currentReminders.filter((Reminder) => Reminder.id !==ReminderId);
    }); 
  };

  const cancelButton = () => {
   setnewReminder(false);
  };

  return (
   
    <View style = {styles.mainScreen}>
      <View style = {styles.textView} >
      <Text style={styles.textComponent}>To-Do List</Text>
      </View>
      <Button title = "New Reminder" onPress= {() => setnewReminder(true)} />
       <ReminderInput 
       modalVisible={newReminder} 
       onAddReminder={addReminderHandler} 
       onCancel={cancelButton}/>  
       <FlatList 
       keyExtractor={(item, index) => item.id}
       data={courseReminders} 
       renderItem={itemData =>( 
       <ReminderItem 
        id={itemData.item.id} 
        onDelete={removeReminderHandler} 
        title={itemData.item.value}/>)}
           />
       </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    padding: 30,
    backgroundColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
  textComponent: {
    fontWeight: 'bold',
    color:'orange',
    textAlign: 'center',
    fontSize:50,
  },
  textView: {
    borderBottomWidth: 5,
    backgroundColor: 'black'
  }

});
