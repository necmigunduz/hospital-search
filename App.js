// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import './style.css';

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
      })
      .catch((error)=> console.log(error.message))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PS</Text>
      <Text style={styles.header}>PATIENT SEARCH</Text>
      <RNPickerSelect
          onValueChange={(value) => {
            // console.log(value)
            setQuery(value)
          }}  
          items={[
              { label: 'Fullname', value: 'name' },
              { label: 'Given name', value: 'given' },
              { label: 'Family name', value: 'family' },
              { label: 'National-Id', value: 'nationalid' },
          ]}
          placeholder={{
            label: 'Select a filter',
            value: ''
          }}
          useNativeAndroidPickerStyle={false}
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
      {console.log(results)}
      <Text style={styles.display}><strong>Patients' List</strong></Text>
      <FlatList
        data={results}
        renderItem={({item}) =>   
            <Text style={styles.display}>
            <strong>Given name:</strong> {item.resource.name[0].given[0]} <br/>
            <strong>Family name:</strong> {item.resource.name[0].family} <br/>
            <strong>Birthdate:</strong> {item.resource.birthDate.toLocaleString('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' })} <br/>  
            <strong>Gender:</strong> {item.resource.gender.charAt(0).toUpperCase() + item.resource.gender.slice(1)} <br/>
            <strong>Email adress:</strong> <a href={item.resource.telecom[1].value}>{item.resource.telecom[1].value}</a> <br/>
            <strong>Phone number:</strong> <a href="tel:{item.resource.telecom[0].value}">{item.resource.telecom[0].value}</a> <br/>
            </Text>
        }
        keyExtractor={item => item.resource.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: '10px',
    padding: '0px 50px',
    fontSize: '25px',
    fontWeight: '900',
    padding: '10px'
  },
  container: {
    flex: 1,
    border: '10px solid black',
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  display: {
    paddingTop: '10px',
    marginLeft: '20px',
    marginBottom: '15px',
    fontSize: '11px'
  },
  bottom: {
    padding: '8px',
    fontSize: '11px',
    marginLeft: '20px'
  },
  logo: {
    fontSize: '50px',
    marginTop: '70px',
    border: '1px solid black',
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '15px',
    fontWeight: '900'
  }
});

export default App;
