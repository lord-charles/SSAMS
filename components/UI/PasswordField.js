import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordField = ({style, onChange}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[style, styles.container]}>
      <TextInput
        placeholder="Password"
        secureTextEntry={!showPassword}
        placeholderTextColor="#A7A7A7"
        style={styles.flex}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={togglePasswordVisibility}
      >
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={22}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  toggleButton: {
    paddingRight: 10
  },
});

export default PasswordField;
