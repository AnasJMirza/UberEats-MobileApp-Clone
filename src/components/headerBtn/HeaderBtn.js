import { View, Text } from 'react-native'
import React from 'react'

const HeaderBtn = (props) => {
  return (
    <View>
      <Text> { props.title } </Text>
    </View>
  )
};

export default HeaderBtn;