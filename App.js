import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  const [time, setTime] = useState('5');
  const [dist, setDist] = useState('5');
  const distance = parseFloat(dist);
  const times = parseFloat(time);

  return (
    <View style={styles.container}>
      <Text>Welcome to the Running Pace Calculator!</Text>
      <TextInput
      style = {styles.input}
      placeholder = "Distance in Miles"
      placeholderTextColor={"#16a63b"}
      onChangeText = {newDist => setDist(newDist)}
      defaultValue = {dist}
      />
      <TextInput
        style = {styles.input}
        placeholder = "Time in Minutes"
        placeholderTextColor={"#16a63b"}
        onChangeText = {newText => setTime(newText)}
        defaultValue = {time}
      />
      <Text style={styles.square}>
        Distance: {dist}, Time: {time}, Pace {times / distance}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 250,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  input: {
    borderwidth: 20,
    borderColor: "#4b475b",
    padding: 10,
    opacity: 1,
    borderRadius: 6,
    margin: 5,
    width: 50,
    
  },
  label: {
    
  },
});
