import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React from "react";

const HeaderRight = () => {
  const searchIconPressHandler = () => {
    console.log("Search Icon Pressed!");
  };
  const bellIconPressHandler = () => {
    console.log("Bell Icon Pressed!");
  };
  const dotsPressHandler = () => {
    console.log("Dots Icon Pressed!");
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={searchIconPressHandler}
      >
        <Ionicons name="search" size={23} color={"white"} />
      </Pressable>

      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={bellIconPressHandler}
      >
        <FontAwesome name="bell" size={23} color="white" />
      </Pressable>

      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={dotsPressHandler}
      >
        <Entypo name="dots-three-vertical" size={23} color="white" />
      </Pressable>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    marginRight: 10
  },
  pressed: {
    opacity: 0.7,
  },
});
