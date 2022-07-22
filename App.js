import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >Yoo! Let's build Uber Eats Clone 🔥</Text>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#030012", 
  },

  text: {
    fontSize: 23,
    color: 'white',
    fontWeight: "600",
  }
})