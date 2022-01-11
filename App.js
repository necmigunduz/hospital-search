// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async (text) => {
    const response = await fetch(`https://fhir.imagerad.com/dummy/Patient/?${query}=${text}`);
    response
      .json()
      .then(data=> {
        setResults(data.entry);
        console.log(results)
      })
      .catch((error)=> console.log(error.message))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIENT SEARCH CONSOLE</Text>
      <Text style={styles.display}>Select a search filter</Text>
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
          style={styles.filter}
      />
      <Text style={styles.display}>Enter your search word below</Text>
      <Searchbar 
        placeholder="Search"
        onChangeText={(text)=>{
          setInput(text);
          fetchData(text)
        }}
        value={input}
      />
      <Text style={styles.display}><strong>Patients' List</strong></Text>
      <FlatList
        data={results}
        renderItem={({item}) => <Text style={styles.display}>
            <strong>Given name:</strong> {item.resource.name[0].given[0]} <br/>
            <strong>Family name:</strong> {item.resource.name[0].family} <br/>
            <strong>Contact info:</strong> ({item.resource.telecom[1].use}) - {item.resource.telecom[1].value} 
          </Text>}
        keyExtractor={item => item.resource.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: '30px',
    fontSize: '30px',
    fontWeight: '900',
    padding: '10px',
    border: '1px black solid',
    borderRadius: '5px',
    color: 'yellow',
    backgroundColor: 'black'

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    padding: '20px'
  },
  filter: {
    width: '150px',
    margin: '0 auto'
  }
});

export default App;
