// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

function App() {
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <Searchbar 
        placeholder="Search"
        onChangeText={(text)=>{
          setInput(text);
        }}
        value=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
