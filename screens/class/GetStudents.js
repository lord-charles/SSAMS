import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import CardUI from "../../components/UI/CardUI";
import HeadingText from "../../components/UI/HeadingText";
import DatePickerUI from "../../components/UI/DatePickerUI";
import ButtonUI from "../../components/UI/ButtonUI";
import { useNavigation } from "@react-navigation/native";

const GetStudents = () => {
  const navigation = useNavigation();
  const getStudentsPressHandler = () => {
    navigation.navigate("MarkAttendance");
  };
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <CardUI>
          <View style={styles.text}>
            <HeadingText>P3</HeadingText>
          </View>
          <View style={styles.align}>
            <DatePickerUI />
            <ButtonUI onPress={getStudentsPressHandler}>Get Students</ButtonUI>
          </View>
        </CardUI>
      </View>
    </ScreenTemplate>
  );
};

export default GetStudents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  align: {
    alignItems: "center",
    margin: 20,
    gap: 10,
  },
  text: {
    paddingBottom: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 2,
  },
});
