import React from 'react';
import { StyleSheet, Text } from 'react-native';

function SearchText() {
    return <Text style={styles.display}>Enter your search word below</Text>
}

const styles = StyleSheet.create({
    display: {
      marginTop: '3px',
      margin: '0 auto', 
      marginBottom: '15px',
      fontSize: '12px',
      borderBottomWidth: '1px'
    }
  });

export default SearchText;