// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

function App() {
  return (
    <View style={styles.container}>
      <Searchbar 
        placeholder="Search"
        onChangeText={()=>{}}
        value=""
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
