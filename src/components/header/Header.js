import { View, Text } from 'react-native'
import { StyleSheet } from "react-native";
import React from 'react'
import HeaderBtn from '../headerBtn/HeaderBtn';

const Header = () => {
  return (
    <View style={styles.container}>
      <HeaderBtn title = "Delivery" backgroundColor="black"  color="white" />
      <HeaderBtn title = "Pickup" backgroundColor="white"  color="black" />
    </View>
  )
};

export default Header;



const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      alignSelf: "center",
  }
});