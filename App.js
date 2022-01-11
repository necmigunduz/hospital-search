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
      <Text style={styles.display}>Select one of the filters in the options to search for (a) patient(s).</Text>
      <RNPickerSelect
          onValueChange={(value) => {
            console.log(value)
            setQuery(value)
          }}  
          items={[
              { label: 'Fullname', value: 'name' },
              { label: 'Given name', value: 'given' },
              { label: 'Family name', value: 'family' },
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
      <Text style={styles.bottom}>
        <strong>Important note:</strong>You can also use asterisk (*) symbol during search, cases are like down below and the
          application should satisfy these cases:
          <br/>--- *abc --> any records that end with “abc”,
          <br/>--- abc* --> any records that start with “abc”,
          <br/>--- *abc* --> any records that contain “abc” in it,
          <br/>--- abc --> any records that match with “abc” exactly.
      </Text>
      <Text style={styles.display}><strong>Patients' List</strong></Text>
      <FlatList
        data={results}
        renderItem={({item}) => <Text style={styles.display}>
            <strong>Given name:</strong> {item.resource.name[0].given[0]} <br/>
            <strong>Family name:</strong> {item.resource.name[0].family} <br/>
            <strong>Gender:</strong> {item.resource.gender} <br/>
            <strong>Email adress:</strong> <a href={item.resource.telecom[1].value}>{item.resource.telecom[1].value}</a> <br/>
            <strong>Phone number:</strong> {item.resource.telecom[0].value} <br/>
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
  },
  bottom: {
    padding: '10px',
    fontSize: '12px',
    marginLeft: '20px'
  }
});

export default App;
