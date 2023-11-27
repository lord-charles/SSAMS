import { StyleSheet, ScrollView, View } from "react-native";
import React from "react";

const CardUI = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

export default CardUI;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    margin: 20
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
