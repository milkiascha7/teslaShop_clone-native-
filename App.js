import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarList from './components/CarList/CarList';
import Header from './components/Header/Header';

export default function App() {
  return (

    <View style={styles.container}>
      <Header />
      <CarList />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});
