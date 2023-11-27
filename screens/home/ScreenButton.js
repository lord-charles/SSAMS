import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ScreenButton = ({onPress, text, imageSource}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={imageSource} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ScreenButton

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        width: 140,
        height: 60,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        marginVertical: 10,
    },
    text:{
        fontWeight: 'bold',
    }
})