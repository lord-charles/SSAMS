import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonUI = ({ onPress, children, disabled }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: disabled ? "gray" : '#57BEBB',
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
   
  },
  textStyle: {
    color: "white",
  },
});

export default ButtonUI

