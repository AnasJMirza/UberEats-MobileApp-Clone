import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from "react-native";
import React from 'react'

const HeaderBtn = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.btnText}> { props.title } </Text>
    </TouchableOpacity>
  )
};
export default HeaderBtn;



// Styling the component


const styles = StyleSheet.create({
  container: {
      backgroundColor: "black",
      paddingHorizontal: 16,
      paddingVertical: 6,
      borderRadius: 30,
  },

  btnText: {
      color: "white",
      fontSize: 15,
      fontWeight: "900",
  }
});