import React from 'react'
import { StyleSheet, Text } from 'react-native';

export default function Logo() {
    return <Text style={styles.logo}>PS</Text>
}

const styles = StyleSheet.create({
    logo: {
      fontSize: '50px',
      marginTop: '20px',
      border: '1px solid black',
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      borderRadius: '15px',
      fontWeight: '900'
    }
  });