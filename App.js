import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import React, { useState, useEffect } from 'react';
import Logo from './Components/logo'
import SearchText from './Components/searchText';
import SearchExplanation from './Components/searchExplanation';
import ResultHeader from './Components/resultHeader';
import Header from './Components/header';
import Select from './Components/select';
import Search from './Components/search';
import ResultDisplay from './Components/resultDisplay';
import './style.css';

function App() {  
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const setQ = (value) => {
    setQuery(value);
  }
  
  const setI = (input) => {
    setInput(input)
  }

  const setR = (results) => {
    setResults(results)
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Header />
      <Select setValue={setQ}/>
      <SearchText />
      <Search setInput={setI} query={query} input={input} setRes={setR}/>
      <SearchExplanation />
      <ResultHeader />
      {!input ? (<Text style={styles.noresults}>Make an entry into searchbar...</Text>) : !results ? (<Text style={styles.noresults}>No results found!</Text>) :       
      (<ResultDisplay resultList={results}/>)
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