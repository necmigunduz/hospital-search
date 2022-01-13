import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

export default function ResultDisplay(props) {
    const {resultList} = props;
    return (
        <FlatList
        data={resultList}
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
      />
    )
}

const styles = StyleSheet.create({
    displayResult: {
      marginTop: '3px',
      margin: '0 auto', 
      marginBottom: '15px',
      fontSize: '11px',
      backgroundColor: 'lightgrey'
    }
  });
