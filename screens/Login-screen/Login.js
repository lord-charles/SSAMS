import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginForm from "./LoginForm";
import { useNavigation } from "@react-navigation/native";


const Login = () => {

  const navigation = useNavigation();

    const onLoginPressHandler = () => {
      
       navigation.reset({
         index: 0,
         routes: [{ name: "AppDrawer" }],
       });
    };

  return (
    <ImageBackground
      source={require("../../assets/images/login.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.formView}>
        <LoginForm loginPressHandler = {onLoginPressHandler}/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  formView: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginTop: 300
  },
});

export default Login;
