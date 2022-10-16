import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput,} from 'react-native';


export default function App() {

  const [time, setTime] = useState('');
  const [dist, setDist] = useState('');
  const distance = parseFloat(dist);
  const times = parseFloat(time);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/running.png')}
      style={{width: 105 , height: 100}}/>
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
      <Text style={styles.output}>{distance} Mile(s)</Text>
      <Text style={styles.output}>{times} Minute(s)</Text>
      <Text style={styles.output}>{times / distance} Minute(s) per Mile</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E9E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 250,
    backgroundColor: '#4A4E69',
    opacity: 0.65,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingVertical: 5,
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
  output: {
    color: '#F8F7F6',
    opacity: 1,
  },
    
});
