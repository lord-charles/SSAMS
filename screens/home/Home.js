import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React, { useCallback, useState } from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import ButtonUI from "../../components/UI/ButtonUI";
import ScreenButton from "./ScreenButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const navigation = useNavigation();

const [username, setUsername] = useState('N/A')

  const schoolInfoPressHandler = () => {
    navigation.navigate("SchoolInfoStack");
  };
  const enrolStudentPressHandler = () => {
    navigation.navigate("EnrolmentStack");
  };
  const examResultPressHandler = () => {
    navigation.navigate("ExamResult");
  };

  const reportPressHandler = () => {
    navigation.navigate("Report");
  };

  const classPressHandlser = () => {
    navigation.navigate("ClassStack");
  };

  const cashTransferPressHandler = () => {
    navigation.navigate("CashTransfer");
  };

  // Retrieving userDetails
  const storeUserDetails = async () => {
    try {
      setUsername(await AsyncStorage.getItem("username"));
    } catch (error) {
      console.log("Error Retrieving token:", error);
    }
  };
 useFocusEffect(
   useCallback(() => {
     storeUserDetails();

     return () => {
       // Clean up any subscriptions or resources if needed
     };
   }, [])
 );


  return (
    <>
      <ScreenTemplate>
        <View style={styles.topView}>
          <Text style={styles.text}>Good Morning</Text>

          <Text style={[styles.text, styles.emphasizedText]}>
            Teacher - {username}
          </Text>
          <ButtonUI>VIEW MY CLASSES</ButtonUI>
        </View>
        <ImageBackground
          imageStyle={styles.imageStyle}
          style={styles.bottomLinkContainer}
          source={require("../../assets/images/HomeIcons/students.png")}
        >
          <ScreenButton
            text={"Enroll \nStudents"}
            imageSource={require("../../assets/images/HomeIcons/enrol.png")}
            onPress={enrolStudentPressHandler}
          />
          <ScreenButton
            text={"Exam \nRegistration"}
            imageSource={require("../../assets/images/HomeIcons/enrol.png")}
          />
          <ScreenButton
            onPress={examResultPressHandler}
            text={"Exam \nResults"}
            imageSource={require("../../assets/images/HomeIcons/examResult.png")}
          />
          <ScreenButton
            onPress={schoolInfoPressHandler}
            text={"School\nInfo"}
            imageSource={require("../../assets/images/HomeIcons/schoolInfo.png")}
          />
          <ScreenButton
            text={"Teacher\nInfo"}
            imageSource={require("../../assets/images/HomeIcons/teacherInfo.png")}
          />
          <ScreenButton
            text={"SDP &\nBudget"}
            imageSource={require("../../assets/images/HomeIcons/budget.png")}
          />
          <ScreenButton
            onPress={cashTransferPressHandler}
            text={"Cash \nTransfer"}
            imageSource={require("../../assets/images/HomeIcons/cashTransfer.png")}
          />
          <ScreenButton
            onPress={reportPressHandler}
            text={"Reports"}
            imageSource={require("../../assets/images/HomeIcons/reports.png")}
          />
        </ImageBackground>
      </ScreenTemplate>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: "#2A3168",
    textAlign: "center",
  },
  topView: {
    marginVertical: 20,
    gap: 25,
    alignItems: "center",
  },
  emphasizedText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bottomLinkContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    backgroundColor: "#424F81",
  },
  imageStyle: {
    borderRadius: 10,
    opacity: 0.3,
  },
});
