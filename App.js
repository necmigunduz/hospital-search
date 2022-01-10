// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = async (text) => {
    const response = await fetch(`https://fhir.imagerad.com/dummy/Patient/?given=${text}`);
    response
      .json()
      .then(data=> {
        setResult(data);
        console.log(data);
        console.log(result)
      })
      .catch((error)=> console.log(error.message))
  };

  return (
    <View style={styles.container}>
      <Searchbar 
        placeholder="Search"
        onChangeText={(text)=>{
          setInput(text);
          fetchData(text)
        }}
        value={input}
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
