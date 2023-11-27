import React from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import ButtonUI from "./ButtonUI";
import { TextInput } from "react-native";

const InputAlert = ({
  visible,
  message,
  onSubmit,
}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.message}>
            Give reason why {message.name} is absent
          </Text>
          <TextInput
            style={[styles.input, styles.inputBig]}
            multiline={true}
            numberOfLines={4} // Specify the number of visible lines
            placeholder="Write here"
          />
          <ButtonUI onPress={onSubmit.bind(null, message.id)}>Submit</ButtonUI>
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
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  inputBig: {
    height: 100,
    backgroundColor: 'lightgray',
    width: '100%',
    marginBottom: 10,
    borderRadius: 2,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});

export default InputAlert;
