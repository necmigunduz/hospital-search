import React from 'react'
import { StyleSheet, Text } from 'react-native';

function Header() {
    return <Text style={styles.header}>PATIENT SEARCH</Text>
}

const styles = StyleSheet.create({
    header: {
      marginTop: '10px',
      padding: '0px 50px',
      fontSize: '25px',
      fontWeight: '900',
      padding: '10px'
    }
});

export default Header;