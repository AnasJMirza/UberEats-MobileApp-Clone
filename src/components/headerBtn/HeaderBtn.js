import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import React from 'react';

const HeaderBtn = props => {

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: props.activeTab === props.title ? 'black' : 'white',
      }}
      onPress={()=>{props.setActiveTab(props.title)}}
      >
      <Text
        style={{
          ...styles.btnText,
          color: props.activeTab === props.title ? 'white' : 'black',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default HeaderBtn;

// Styling for the the component

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 30,
  },

  btnText: {
    fontSize: 15,
    fontWeight: '900',
  },
});
