import React from 'react'
import { StyleSheet, Text } from 'react-native';

function Header() {
    return <Text style={styles.header}>PATIENT SEARCH</Text>
}

const styles = StyleSheet.create({
    header: {
      marginTop: '16px',
      padding: '0px 50px',
      fontSize: '25px',
      fontWeight: '500',
      padding: '10px',
      lineHeight:'18px',
      textShadow: '2px 2px grey'
    }
});

export default Header;