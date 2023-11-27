import { StyleSheet, Text, TextInput, View, BackHandler } from "react-native";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import HeadingText from "../../components/UI/HeadingText";
import DropdownUI from "../../components/UI/DropdownUI";
import ButtonUI from "../../components/UI/ButtonUI";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import CardUI from "../../components/UI/CardUI";
import { useEffect, useState } from "react";
import AlertUI from "../../components/UI/AlertUI";

const BasicSchoolInfo = () => {
  const navigation = useNavigation();

  const [alertVisible, setAlertVisible] = useState(false);

  const handleAlertOnClose = () => {
    navigation.navigate("RecordSchoolInfo");
  };

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
  ];

  const onSubmit = () => {
    //Gather all inputs
    //Validate all inputs
    //Store data in db or redux

    setAlertVisible(true);
  };

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <AlertUI
          visible={alertVisible}
          title="Success!"
          message="Basic School information has been successfully captured."
          onClose={handleAlertOnClose}
          iconName={"checkmark-circle-sharp"}
          iconColor={"#57BEBB"}
        />
        <CardUI>
          <Text>School Name</Text>
          <View style={styles.margin}>
            <DropdownUI placeholder="Enter School Name" data={data} />
          </View>
          <Text>School SAMS Code</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter School SAMS Code"
          />
          <Text>EMIS Code</Text>
          <TextInput style={styles.input} placeholder="Enter EMIS Code" />
          <Text>State</Text>
          <View style={styles.margin}>
            <DropdownUI placeholder="Select State" data={data} />
          </View>
          <Text>County</Text>
          <View style={styles.margin}>
            <DropdownUI placeholder="Enter EMIS County" data={data} />
          </View>
          <Text>Payam</Text>
          <View style={styles.margin}>
            <DropdownUI placeholder="Select Payam" data={data} />
          </View>
          <Text>Boma</Text>
          <View style={styles.margin}>
            <DropdownUI placeholder="Select Boma" data={data} />
          </View>
          <Text>Academic Year</Text>
          <View style={styles.margin}>
            <DropdownUI placeholder="Select Academic Year" data={data} />
          </View>
          <Text>School Mission: </Text>
          <TextInput
            style={[styles.input, styles.inputBig]}
            multiline={true}
            numberOfLines={4} // Specify the number of visible lines
            placeholder="Enter School Mission"
          />
          <Text>School Vision: </Text>
          <TextInput
            style={[styles.input, styles.inputBig]}
            multiline={true}
            numberOfLines={4} // Specify the number of visible lines
            placeholder="Enter School Vision"
          />
          <Text>Bank Name: </Text>
          <TextInput style={styles.input} placeholder="Enter Bank Name" />
          <Text>Bank Branch: </Text>
          <TextInput style={styles.input} placeholder="Enter Bank Branch" />
          <Text>Bank Account Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bank Account Name"
          />
          <Text>Bank Account Number: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Bank Account Number"
          />
          <View style={styles.btnContainer}>
            <ButtonUI onPress={onSubmit}>Submit</ButtonUI>
          </View>
        </CardUI>
      </View>
    </ScreenTemplate>
  );
};

export default BasicSchoolInfo;

const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 15,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  inputBig: {
    height: 100,
  },
  btnContainer: {
    alignItems: "center",
    margin: 10,
  },
  margin: {
    marginVertical: 15,
  },
});
