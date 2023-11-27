import { Image, StyleSheet, View } from "react-native";
import React from "react";
import BottomNavigation from "./BottomNavigation";

const ScreenTemplate = ({ children }) => {
  return (
    <View style={styles.screenContainer}>
      <View style={{ flex: 1 }}>{children}</View>
      <Image
        style={styles.backgroundImage}
        source={require("../../assets/images/bluewave.png")}
      />
      <BottomNavigation />
    </View>
  );
};

export default ScreenTemplate;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    position: "absolute",
    bottom: 65,
    zIndex: -5,
  },
});
