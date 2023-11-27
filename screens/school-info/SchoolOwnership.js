import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import HeadingText from "../../components/UI/HeadingText";
import CardUI from "../../components/UI/CardUI";
import DropdownUI from "../../components/UI/DropdownUI";
import ButtonUI from "../../components/UI/ButtonUI";
import SchoolOwnershipRadioButtons from "./SchoolOwnershipRadioButtons";
import CheckBoxUI from "../../components/UI/CheckboxUI";
import AlertUI from "../../components/UI/AlertUI";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SchoolOwnership = () => {
  const navigation = useNavigation();

  const [alertVisible, setAlertVisible] = useState(false);

  const handleAlertOnClose = () => {
    navigation.navigate("RecordSchoolInfo");
  };

  const [englishChecked, setEnglishChecked] = useState(false);
  const handleEnglishCheck = () => {
    setEnglishChecked(!englishChecked);
  };

  const [nationalLanguageChecked, setNationalLanguageChecked] = useState(false);
  const handleNationalLanguageCheckedk = () => {
    setNationalLanguageChecked(!nationalLanguageChecked);
  };

  const [otherChecked, setOtherChecked] = useState(false);
  const handleOtherChecked = () => {
    setOtherChecked(!otherChecked);
  };

  const onSubmit = () => {
    //Gather all inputs
    //Validate all inputs
    //Store data in db or redux

    setAlertVisible(true);
  };

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
  ];

  const sex = [
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
  ];

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <AlertUI
          visible={alertVisible}
          title="Success!"
          message="School Ownership information has been successfully captured."
          onClose={handleAlertOnClose}
          iconName={"checkmark-circle-sharp"}
          iconColor={"#57BEBB"}
        />
        {/* <HeadingText>School Ownership</HeadingText> */}
        <CardUI>
          <Text>SCHOOL OWNERSHIP: </Text>
          <Text style={styles.marginV}>
            Tell us about your school's ownership type
          </Text>
          <SchoolOwnershipRadioButtons />
          <Text style={{ marginTop: 10 }}>LANGUAGE OF INSTRUCTION</Text>
          <View style={styles.marginV}>
            <DropdownUI placeholder="Select Grade" data={data} />
          </View>
          <Text style={styles.marginV}>Tick all that apply</Text>
          <CheckBoxUI
            title="English"
            checked={englishChecked}
            handleCheck={handleEnglishCheck}
          />
          <CheckBoxUI
            title="National Language"
            checked={nationalLanguageChecked}
            handleCheck={handleNationalLanguageCheckedk}
          />
          {nationalLanguageChecked && (
            <TextInput
              style={styles.input}
              placeholder="Specify National Language"
            />
          )}
          <CheckBoxUI
            title="Other"
            checked={otherChecked}
            handleCheck={handleOtherChecked}
          />
          {otherChecked && (
            <TextInput style={styles.input} placeholder="Specify other" />
          )}
          <Text>REGISTER MEMBERS:</Text>
          <Text style={[styles.smallText, styles.marginV]}>
            The following members were chosen to represent our voices in the
            School Management Committee/Board of Governors, and they have
            confirmed that they understand that their services in the School
            Management Committee/Board of Governors is voluntary.
          </Text>
          <Text style={[styles.bold, styles.marginV]}>Head Teacher:</Text>
          <TextInput style={styles.input} placeholder="Full Name" />

          <DropdownUI data={sex} placeholder={"Sex"} />
          <TextInput style={styles.input} placeholder="Phone Number" />
          <Text style={[styles.bold, styles.marginV]}>
            Deputy Head Teacher:
          </Text>
          <TextInput style={styles.input} placeholder="Full Name" />

          <DropdownUI data={sex} placeholder={"Sex"} />
          <TextInput style={styles.input} placeholder="Phone Number" />
          <Text style={[styles.bold, styles.marginV]}>School Officer</Text>
          <TextInput style={styles.input} placeholder="Full Name" />

          <DropdownUI data={sex} placeholder={"Sex"} />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>Female Teacher:</Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>Male Teacher:</Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>
            Female Parent Representative:
          </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>
            Female Parent, Representative Of a Learner with Disability:
          </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>
            Male Parent Representative:
          </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>
            Male Parent, Representative of a Learner with Disability:
          </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>
            Women’s Group/Traditional/Religious/Community leader/School
            Mentor/Representative of Persons with Disabilities:
          </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>Head Girl </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>Head Boy: </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <Text style={[styles.bold, styles.marginV]}>
            Representative of Professional or Founding Body:
          </Text>
          <TextInput style={styles.input} placeholder="First Name" />
          <TextInput style={styles.input} placeholder="Surname" />
          <TextInput style={styles.input} placeholder="Phone Number" />

          <View style={styles.btnContainer}>
            <ButtonUI onPress={onSubmit}>Submit</ButtonUI>
          </View>
        </CardUI>
      </View>
    </ScreenTemplate>
  );
};

export default SchoolOwnership;

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12,
  },
 
  marginV: {
    marginVertical: 7,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  btnContainer: {
    alignItems: "center",
    margin: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});
