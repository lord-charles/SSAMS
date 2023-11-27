import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

const SchoolOwnershipRadioButtons = () => {
  const [radioChecked, setRadioChecked] = useState("1");

  const handleRadioCheck = (value) => {
    setRadioChecked(value);
  };

  return (
    <RadioButton.Group onValueChange={handleRadioCheck} value={radioChecked}>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          color="#57BEBB" // Set the color of the radio button when checked
          uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
          value="1"
        />
        <Text style={styles.smallText}>Government</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
        <Text style={styles.smallText}>NGO (Excluding Faith-Based)</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="3" />
        <Text style={styles.smallText}>Private Individual/Group</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="4" />
        <Text style={styles.smallText}>Community (Excluding Faith-based)</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="5" />
        <Text style={styles.smallText}>Faith-based (Religious Group)</Text>
      </View>
    </RadioButton.Group>
  );
};

export default SchoolOwnershipRadioButtons;

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  smallText:{
    fontSize: 12
  }
});
