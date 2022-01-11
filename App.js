// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async (text) => {
    const response = await fetch(`https://fhir.imagerad.com/dummy/Patient/?${query}=${text}`);
    response
      .json()
      .then(data=> {
        setResult(data);
        console.log(data)
      })
      .catch((error)=> console.log(error.message))
  };


  return (
    <View style={styles.container}>
      <RNPickerSelect
          onValueChange={(value) => {
            console.log(value)
            setQuery(value)
          }}  
          items={[
              { label: 'Name', value: 'name' },
              { label: 'Given', value: 'given' },
              { label: 'Family', value: 'family' },
              { label: 'National-Id', value: 'nationalid' },
          ]}
      />
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
