import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList, Alert, Image} from 'react-native';

import ReminderItem from './components/ReminderItem';
import ReminderInput from './components/ReminderInput';


export default function App() {
  
  const [courseReminders, setCourseReminders] = useState([]);
  const [newReminder, setnewReminder] = useState(false);  //change name newReminder n another

  
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
    padding: 30
  },
});
