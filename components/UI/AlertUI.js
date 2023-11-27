import React from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import ButtonUI from "./ButtonUI";
import { Ionicons } from "@expo/vector-icons";

const AlertUI = ({ visible, title, message, onClose, iconName, iconColor }) => {

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Ionicons name={iconName} size={50} color={iconColor} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <ButtonUI onPress={onClose}>Continue</ButtonUI>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AlertUI;
