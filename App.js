import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './src/screens/Home';

const App = () => {
  return (
    <View style={{backgroundColor: "#eee", flex: 1}}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <Home />
    </View>
  )
};

export default App;



