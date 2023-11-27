import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const RecordSchoolInfoBtn = ({onPress, children}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{children}</Text>
      <AntDesign name="pluscircleo" size={20} color="#57BEBB" />
    </TouchableOpacity>
  );
};

export default RecordSchoolInfoBtn;

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    paddingVertical: 15,
    width: 240,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
  }
});
