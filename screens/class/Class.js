import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import ClassItem from "./ClassItem";
import { useNavigation } from "@react-navigation/native";

const Class = () => {
  const navigation = useNavigation();
  const onPressHandler = (id) => {
    navigation.navigate("Attendance", {id})
  }
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <ClassItem className={"P3"} onPress={onPressHandler.bind(null, 12)} attendanceUpdated={true}/>
        <ClassItem className={"P4"} attendanceUpdated={true}/>
        <ClassItem className={"P5"} attendanceUpdated={false}/>
        <ClassItem className={"P6"} attendanceUpdated={false}/>
        <ClassItem className={"P7"} attendanceUpdated={true}/>
        <ClassItem className={"P8"} attendanceUpdated={false}/>
      </View>
    </ScreenTemplate>
  );
};

export default Class;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  }
});
