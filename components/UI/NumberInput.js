// import React, { useState } from "react";
// import { StyleSheet, TextInput, View } from "react-native";

// const NumberInput = ({ value, onChange }) => {
//   const [formattedValue, setFormattedValue] = useState(String(value));

//   const handleInputChange = (text) => {
//     // Remove non-numeric characters from the input
//     const numericValue = text.replace(/[^0-9]/g, "");

//     setFormattedValue(numericValue);
//     onChange(parseInt(numericValue, 10));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={formattedValue}
//         onChangeText={handleInputChange}
//         keyboardType="numeric"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     padding: 8,
//   },
//   input: {
//     fontSize: 16,
//   },
// });

// export default NumberInput;
import { StyleSheet, TextInput } from 'react-native'
import {useState} from 'react'

const NumberInput = ({ maxLength = 2, onChange }) => {
  const [number, setNumber] = useState("");

  const onChanged = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
    }

    setNumber(newText);
    onChange(newText); // Send the sanitized number back to the parent component
  };

  return (
    <TextInput
      keyboardType="numeric"
      onChangeText={(text) => onChanged(text)}
      value={number}
      maxLength={maxLength}
      style={[{ fontSize: 12, textAlign: "center" }, maxLength > 2 ? styles.inputLarge : styles.input]}
      placeholder=""
    />
  );
};

export default NumberInput

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 30,
    width: 30,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  inputLarge: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 30,
    width: 100,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
});