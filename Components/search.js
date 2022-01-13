import React, { useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import FetchData from './fetchData';

export default function Search(props) {
    const { setInput, query, input, setRes } = props;
    const getData = async (query, input) => {
        let dataSet = [];
        dataSet = await FetchData(query, input)
        console.log(dataSet)
        setRes(dataSet) 
      }
    
      useEffect(() => {
        getData(query, input)
      }, [query, input])

    return (
        <Searchbar 
        placeholder="Search"
        onChangeText={(text)=>{
          setInput(text);
          FetchData(query, text)
        }}
        value={input}
        style={{maxWidth: '250px', height: '30px'}}
      />
    )
}
