// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, AppRegistry } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import FetchData from './Components/fetchData';
import Logo from './Components/logo'
import SearchText from './Components/searchText';
import SearchExplanation from './Components/searchExplanation';
import ResultHeader from './Components/resultHeader';
import Header from './Components/header';
import './style.css';

function App() {  
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  
  const getData = async (query, input) => {
    let dataSet = [];
    dataSet = await FetchData(query, input)
    console.log(dataSet)
    setResults(dataSet) 
  }

  useEffect(() => {
    getData(query, input)
  }, [query, input])

  return (
    <View style={styles.container}>
      <Logo />
      <Header />
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
          style={{color: 'white'}}
      />
      <SearchText />
      <Searchbar 
        placeholder="Search"
        onChangeText={(text)=>{
          setInput(text);
          FetchData(query, text)
        }}
        value={input}
        style={{maxWidth: '250px', height: '30px'}}
      />
      <SearchExplanation />
      <ResultHeader />
      {!input ? (<Text style={styles.noresults}>Make an entry into searchbar...</Text>) : !results ? (<Text style={styles.noresults}>No results found!</Text>) :       
      (<FlatList
        data={results}
        renderItem={({item}) =>   
            <Text style={styles.displayResult}>
            <strong>Given name:</strong> {item.resource.name[0].given[0]} <br/>
            <strong>Family name:</strong> {item.resource.name[0].family} <br/>
            <strong>Birthdate:</strong> {item.resource.birthDate.toLocaleString('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' })} <br/>  
            <strong>Gender:</strong> {item.resource.gender.charAt(0).toUpperCase() + item.resource.gender.slice(1)} <br/>
            <strong>Email adress:</strong> <a href={item.resource.telecom[1].value}>{item.resource.telecom[1].value}</a> <br/>
            <strong>Phone number:</strong> <a href="tel:{item.resource.telecom[0].value}">{item.resource.telecom[0].value}</a> <br/>
            </Text>
        }
        keyExtractor={item => item.resource.id}
      />)
      } 


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    border: '10px solid #5F9EA0',
    backgroundColor: 'lightblue',
    borderRadius: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  displayResult: {
    marginTop: '3px',
    margin: '0 auto', 
    marginBottom: '15px',
    fontSize: '11px',
    backgroundColor: 'lightgrey'
  },
  noresults: {
    marginTop: '10px',
    marginBottom: '15px',
    fontSize: '15px',
    height: '250px',
    fontWeight: '600'
  }
});

AppRegistry.registerComponent('Hospital-Search', () => App);
export default App;