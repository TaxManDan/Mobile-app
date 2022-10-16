import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  const [time, setTime] = useState('');
  const [dist, setDist] = useState('');
  const distance = parseFloat(dist);
  const times = parseFloat(time);

  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Welcome to the Running Pace Calculator!</Text>
      <View style={styles.row}>
      <Text style={styles.label}>Distance:</Text>
      <TextInput
      style = {styles.input}
      placeholder = "Miles"
      placeholderTextColor={"#171729"}
      onChangeText = {newDist => setDist(newDist)}
      defaultValue = {dist}
      />
      </View>
      <View style={styles.row}>
      <Text style={styles.label}>Time:</Text>
      <TextInput
        style = {styles.input}
        placeholder = "Minutes"
        placeholderTextColor={"#171729"}
        onChangeText = {newText => setTime(newText)}
        defaultValue = {time}
      />
      </View>
      <View style={styles.square}>
      <Text>{distance} Mile(s)</Text>
      <Text>{times} Minute(s)</Text>
      <Text>{times / distance} Minute(s) per Mile</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9A8C98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 250,
    backgroundColor: '#F3EBE6',
    opacity: 0.7,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#22223B',
    shadowColor: '#19192D',
    shadowOffset: 100,
    shadowOpacity: .9,
    shadowRadius: 50,
  },
  input: {
    borderwidth: 20,
    borderColor: "#19192D",
    padding: 10,
    opacity: 1,
    borderRadius: 6,
    margin: 5,
    width: 100,
    textAlign: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    color:  '#4A4E69',
    shadowColor: '#19192D',
    shadowOffset: 20,
    shadowRadius: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
    alignContent: 'center',
    width: 300,
  },
  label: {
    paddingVertical: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 10,
    width: 80,
    color: '#4A4E69'
  },
  text: {
    color: '#1F1F36',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
