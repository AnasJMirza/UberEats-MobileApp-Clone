import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import Header from '../components/header/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    }
});
