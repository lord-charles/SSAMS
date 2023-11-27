import React from "react";
import { StyleSheet, View } from "react-native";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const CheckBoxUI = ({ title, checked, handleCheck }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        containerStyle={styles.checkboxContainer}
        title={title}
        checked={checked}
        onPress={handleCheck}
        checkedIcon={
          <Icon
            name="check-square-o"
            size={24}
            color="#57BEBB" // Set the color of the checkbox box to white
          />
        }
        uncheckedIcon={
          <Icon
            name="square-o"
            size={24}
            color="#57BEBB" // Set the color of the checkbox box to white
          />
        }
        checkedColor="#57BEBB" // Set the color of the checkmark
        textStyle={styles.checkboxText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Set flexDirection to "row" to make the checkbox occupy only necessary space
    alignItems: "center", // Center the checkbox vertically
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    paddingHorizontal: 0,
    margin: 0,
  },
  checkboxText: {
    color: "black",
    fontWeight: 'normal',
    fontSize: 12,
  },
});

export default CheckBoxUI;

// import { StyleSheet, Text, View } from "react-native";
// import { CheckBox } from "react-native-elements";

// const CheckBoxUI = ({title, checked, handleCheck}) => {

//   return (
//     <CheckBox
//       containerStyle={styles.checkboxContainer}
//       title={title}
//       checked={checked}
//       onPress={handleCheck}
//       textStyle={styles.checkboxText}
//       checkedColor="#57BEBB"
//     />
//   );
// };

// export default CheckBoxUI;

// const styles = StyleSheet.create({
//   checkboxContainer: {
//     backgroundColor: "transparent",
//     borderWidth: 0,
//     paddingHorizontal: 0,
//     margin: 0,
//   },
//   checkboxText: {
//     color: "black",
//     fontWeight: "normal",
//   },
// });
