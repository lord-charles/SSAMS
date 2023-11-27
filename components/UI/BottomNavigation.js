import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Accessing the screen name
  const screenName = route.name;

  let homeIconColorStyle = "#2A3168";
  let homeTextColorStyle = { color: "#2A3168" };
  let classIconColorStyle = "#2A3168";
  let classTextColorStyle = { color: "#2A3168" };
  let accountIconColorStyle = "#2A3168";
  let accountTextColorStyle = { color: "#2A3168" };

  if (
    screenName === "Home" 
    // ||
    // screenName === "RecordSchoolInfo" ||
    // screenName === "SchoolOwnership" ||
    // screenName === "SchoolInfrastructure" ||
    // screenName === "BasicSchoolInfo"
  ) {
    homeIconColorStyle = "#55BABB";
    homeTextColorStyle = { color: "#55BABB" };
  } else if (screenName === "Class") {
    classIconColorStyle = "#55BABB";
    classTextColorStyle = { color: "#55BABB" };
  } else if (screenName === "Account") {
    accountIconColorStyle = "#55BABB";
    accountTextColorStyle = { color: "#55BABB" };
  }

  return (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          console.log("Home tab pressed");
          navigation.navigate("Home");
        }}
      >
        <Entypo name="home" size={24} color={homeIconColorStyle} />
        <Text style={[styles.text, homeTextColorStyle]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          console.log("Home tab pressed");
          navigation.navigate("ClassStack");
        }}
      >
        <MaterialIcons
          name="people-alt"
          size={24}
          color={classIconColorStyle}
        />
        <Text style={[styles.text, classTextColorStyle]}>Class</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          console.log("Home tab pressed");
          navigation.navigate("Account");
        }}
      >
        <MaterialIcons
          name="account-circle"
          size={24}
          color={accountIconColorStyle}
        />
        <Text style={[styles.text, accountTextColorStyle]}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  bottomNavContainer: {
    width: "100%",
    flexDirection: "row",
    height: 65,
    alignItems: "center",
    backgroundColor: "white",
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "#2A3168",
    fontWeight: "bold",
  },
});
