import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import React from 'react';
import HeaderBtn from '../headerBtn/HeaderBtn';

const Header = () => {
  const [isActive, setIsActive] = React.useState('Delivery');

  return (
    <View style={styles.container}>
      <HeaderBtn
        title="Delivery"
        backgroundColor="black"
        color="white"
        activeTab={isActive}
        setActiveTab={setIsActive}
      />
      <HeaderBtn
        title="Pickup"
        backgroundColor="white"
        color="black"
        activeTab={isActive}
        setActiveTab={setIsActive}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
