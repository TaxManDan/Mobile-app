import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [time, setTime] = useState('5');
  const [dist, setDist] = useState('5');
  const [computed, setComputed] = useState(true);
  const [pace, setPace] = useState('10')
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
      <Button
      onPress={()=>{
        setComputed(false);
        pace = computePace(text,dist);
      }}
      title={computed ?  "Compute Pace" : "Pace Computed"}
      />
      <TouchableOpacity 
      style = {styles.square}
      onPress ={()=> pace = computePace(time,dist)}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        Distance: {dist}, Time: {time}, Pace {pace}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const computePace = (times, dist) =>{
  var time = parsefloat(times);
  var distance = parsefloat(dist);
  var pace = distance / time;
  
  return pace
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 72,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
  },
  input: {
    borderwidth: 20,
    borderColor: "#4b475b",
    padding: 7,
    opacity: 1,
    borderRadius: 6,
    margin: 7,
    
  },
});
