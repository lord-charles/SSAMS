import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const HeaderLeft = () => {

  const navigation = useNavigation();

          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require("../../assets/images/hamburger.png")}
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          );
}
export default HeaderLeft;

const styles = StyleSheet.create({
});
