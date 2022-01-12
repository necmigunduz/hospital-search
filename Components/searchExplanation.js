import React from "react";
import { StyleSheet, Text } from 'react-native';

function SearchExplanation() {
  return (
    <Text style={styles.bottom}>
      <strong>Important note:</strong>You can also use asterisk (*) symbol
      during search, cases are like down below and the application should
      satisfy these cases:
      <br />
      --- *abc = any records that end with “abc”,
      <br />
      --- abc* = any records that start with “abc”,
      <br />
      --- *abc* = any records that contain “abc” in it,
      <br />
      --- abc = any records that match with “abc” exactly.
    </Text>
  );
}

const styles = StyleSheet.create({
    bottom: {
      margin: '8px',
      fontSize: '11px',
      marginLeft: '20px'
    }
  });

export default SearchExplanation;