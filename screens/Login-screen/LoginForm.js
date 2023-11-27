import {
  Button,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PasswordField from "../../components/UI/PasswordField";
import { useState } from "react";
import tw from "twrnc";
import Toast from "react-native-toast-message";
import LottieView from "lottie-react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = ({ loginPressHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const usernameChangeHandler = (username) => {
    setUsernameError("");
    setUsername(username);
  };

  const passwordChangeHandler = (password) => {
    setPasswordError("");
    setPassword(password);
  };

  // Storing userDetails
  const storeUserDetails = async (token, username) => {
    try {
      await AsyncStorage.setItem("accessToken", token);
      await AsyncStorage.setItem("username", username);
      console.log(token, username);
    } catch (error) {
      console.log("Error storing token:", error);
    }
  };

  const onLoginPressHandler = async () => {
    // INPUTS VALIDATION AND ERROR HANDLING
    setLoading(true);

    if (username.trim().length === 0) {
      setUsernameError("Username cannot be empty, please try again");
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Username cannot be empty, please try again",
      });
      setLoading(false);

      return;
    }
    if (password.trim().length === 0) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Password cannot be empty. Please try again.",
      });
      setLoading(false);

      return;
    }

    try {
      // const response = await fetch('http://35.244.58.160/api/authentication', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: username,
      //     password: password,
      //   }),
      // });

      const response = await axios.post(
        "http://35.244.58.160/api/authentication",
        {
          username: username,
          password: password,
        }
      );

      if (response.data?.success && response.data?.status === "active") {
      Toast.show({
        type: "success",
        text1: "Authentication Successful",
        text2: `Welcome back ${response.data?.username}! You have successfully logged in.`,
      });

        storeUserDetails(response.data?.accessToken, response.data?.username);
        loginPressHandler();
        setLoading(false);
      } else {
        Toast.show({
          type: "error",
          text1: "Account Disabled",
          text2:
            "Your account has been disabled. Please contact support for assistance.",
        });
        setLoading(false);
      }

      // Authentication successful, call the loginPressHandler
      setUsernameError("");
      setPasswordError("");
    } catch (error) {
      console.error("Error during authentication:", error);
      Toast.show({
        type: "error",
        text1: "Authentication Failed",
        text2:
          "Invalid username or password. Please check your credentials and try again.",
      });
      setLoading(false);
    }
  };

  const onForgotPassPressHandler = () => {
    // console.log("forgot pass pressed!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        style={usernameError ? styles.inputError : styles.input}
        placeholderTextColor="#A7A7A7"
        placeholder="Username"
        onChangeText={usernameChangeHandler}
      />
      <PasswordField
        style={passwordError ? styles.inputError : styles.input}
        onChange={passwordChangeHandler}
      />
      {usernameError && <Text style={styles.text}>{usernameError}</Text>}
      {passwordError && <Text style={styles.text}>{passwordError}</Text>}
      <View style={styles.btnView}>
        <Pressable
          onPress={onForgotPassPressHandler}
          style={({ pressed }) => pressed && styles.opacity}
        >
          <Text style={styles.forgotPassBtn}>Forgot Password?</Text>
        </Pressable>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={onLoginPressHandler} style={styles.loginBtn}>
          {!loading ? (
            <Text style={tw`text-white`}>LOGIN</Text>
          ) : (
            <View
              style={tw`relative h-[16px]  relative left-[-30px] top-[-17px] px-[17px]`}
            >
              <LottieView
                source={require("../../assets/lottie/loading.json")}
                autoPlay
                loop
                width={90}
                height={50}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#55BABB",
    padding: 25,
    width: "81%",
    // marginLeft: windowWidth > 380 ? 50 : 35,
    // marginRight: windowWidth > 380 ? 50 : 35,
    gap: 15,
  },
  text: {
    fontSize: 11,
    textAlign: "center",
    color: "red",
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 10,
    borderRadius: 13,
    height: 40,
  },
  inputError: {
    backgroundColor: "pink",
    padding: 5,
    paddingLeft: 10,
    borderRadius: 13,
    height: 40,
  },
  btnView: {
    alignItems: "center",
  },
  forgotPassBtn: {
    color: "white",
    textDecorationLine: "underline",
  },
  opacity: {
    opacity: 0.7,
  },
  loginBtn: {
    backgroundColor: "#2A3168",
    color: "white",
    paddingVertical: 11,
    paddingHorizontal: 55,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 17,
  },
});
