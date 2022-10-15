import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [text, setText, dist] = useState('');
  return (
    <View style={styles.container}>
      <Text>Welcome to the Running Pace Calculator!</Text>
      <TextInput
      autoCorrect={true}
      placeholder="in Miles"
      onChangeText={newText => setText(newText)}
      defaultValue={dist}
      />
      <TextInput
      autoCorrect = {true}
      placeholder = "Time"
      />
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      
      <Text style={{padding: 10, fontSize: 42}}>
        {computePace(text,dist)}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
  
}
function computePace(times, dist){
  var time = parsefloat(times);
  var distance = parsefloat(dist);
  var pace = time / distance;
  return pace
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
