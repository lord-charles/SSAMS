import { StyleSheet, Text } from 'react-native'
import React from 'react'

const HeadingText = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
}

export default HeadingText

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: "#2A3168",
    fontSize: 16
  },
});