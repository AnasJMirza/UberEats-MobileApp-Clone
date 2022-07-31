import { View, Text } from 'react-native'
import React from 'react'
import HeaderBtn from '../headerBtn/HeaderBtn';

const Header = () => {
  return (
    <View>
      <HeaderBtn title = "Abc" />
      <HeaderBtn title = "Xyz" />
    </View>
  )
};

export default Header;