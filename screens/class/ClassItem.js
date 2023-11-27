import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const ClassItem = ({onPress, className, attendanceUpdated}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require("../../assets/images/classroom.png")} />
      <Text style={styles.text}>{className}</Text>
      <View style={styles.iconContainer}>
        <Ionicons
          name={attendanceUpdated ? "checkmark-circle" : "warning"}
          size={24}
          color={attendanceUpdated ? "#57BEBB" : "gold"}
        />
        <Text style={styles.iconText}>
          {attendanceUpdated ? "Up to date" : "Not up to date"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ClassItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 15,
    width: 240,
    borderRadius: 8,
    elevation: 5,
    flexDirection: "row",
    gap: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#24184D",
    fontSize: 15
  },
  iconText: {
    fontSize: 10
  }
});