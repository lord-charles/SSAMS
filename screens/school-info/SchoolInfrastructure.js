import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import HeadingText from "../../components/UI/HeadingText";
import CardUI from "../../components/UI/CardUI";
import CheckBoxUI from "../../components/UI/CheckboxUI";
import { TextInput } from "react-native-gesture-handler";
import NumberInput from "../../components/UI/NumberInput";
import AlertUI from "../../components/UI/AlertUI";
import ButtonUI from "../../components/UI/ButtonUI";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SchoolInfrastructure = () => {
  const navigation = useNavigation();

  const [alertVisible, setAlertVisible] = useState(false);

  const [noChecked, setNoChecked] = useState(false);
  const handleNoCheck = () => {
    setNoChecked(!noChecked);
  };

  const [schoolChecked, setSchoolChecked] = useState(false);
  const handleSchoolCheck = () => {
    setSchoolChecked(!schoolChecked);
  };

  const [communityChecked, setCommunityChecked] = useState(false);
  const handleCommunityCheck = () => {
    setCommunityChecked(!communityChecked);
  };

  const [ngoChecked, setNgoChecked] = useState(false);
  const handleNgoCheck = () => {
    setNgoChecked(!ngoChecked);
  };

  const [otherChecked, setOtherChecked] = useState(false);
  const handleOtherCheck = () => {
    setOtherChecked(!otherChecked);
  };

  const onSubmit = () => {
    //Gather all inputs
    //Validate all inputs
    //Store data in db or redux

    setAlertVisible(true);
  };

  const handleAlertOnClose = () => {
    navigation.navigate("RecordSchoolInfo");
  };
  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <AlertUI
          visible={alertVisible}
          title="Success!"
          message="School Infrastructure information has been successfully captured."
          onClose={handleAlertOnClose}
          iconName={"checkmark-circle-sharp"}
          iconColor={"#57BEBB"}
        />
        <CardUI>
          <Text>BASIC SERVICES AVAILABLE AT THE SCHOOL:</Text>
          <Text style={[styles.marginV, styles.smallText]}>
            Tick all that apply
          </Text>
          <Text>1. School Feeding:</Text>
          <CheckBoxUI
            title="No"
            checked={noChecked}
            handleCheck={handleNoCheck}
          />
          <CheckBoxUI
            title="By School"
            checked={schoolChecked}
            handleCheck={handleSchoolCheck}
          />
          <CheckBoxUI
            title="By Community"
            checked={communityChecked}
            handleCheck={handleCommunityCheck}
          />
          <CheckBoxUI
            title="NGO Supported by WFP"
            checked={ngoChecked}
            handleCheck={handleNgoCheck}
          />
          <CheckBoxUI
            title="Other"
            checked={otherChecked}
            handleCheck={handleOtherCheck}
          />
          {otherChecked && (
            <TextInput style={styles.input} placeholder="Specify Other" />
          )}
          <Text>2. Drinking water:</Text>
          <CheckBoxUI title="Borehole" />
          <CheckBoxUI title="Other Source" />
          <CheckBoxUI title="Accessible for children with disabilities" />
          <Text>3. Latrines:</Text>
          <CheckBoxUI title="Separate for boys and girls" />
          <CheckBoxUI title="Accessible" />
          <CheckBoxUI title="Accessible for children with disabilities" />
          <Text>4. Handwashing facility:</Text>
          <CheckBoxUI title="Fixed" />
          <CheckBoxUI title="Portable" />
          <CheckBoxUI title="Accessible for children with disabilities" />
          <Text>5. Wall/fence around the compound:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Completed</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Need Repairs</Text>
            </View>
          </RadioButton.Group>
          <Text>6. Library:</Text>
          <CheckBoxUI title="Available" />
          <CheckBoxUI title="Not Available" />
          <CheckBoxUI title="Accessible for children with disabilities" />
          <Text>7. Sports ground:</Text>
          <CheckBoxUI title="Available" />
          <CheckBoxUI title="Not Available" />
          <CheckBoxUI title="Accessible for children with disabilities" />
          <Text>8. Kitchen:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>9. Storeroom:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>10. School Management Committee/Board of Governors:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>11. Parent Teacher Association:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>12. Teacher trained in psycho-social support:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>13. Mentoring programme for learners:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>14. "Our school" listening club:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Available</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Not available</Text>
            </View>
          </RadioButton.Group>
          <Text>15. Capitation Grants:</Text>
          <RadioButton.Group>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                color="#57BEBB" // Set the color of the radio button when checked
                uncheckedColor="#57BEBB" // Set the color of the radio button when unchecked
                value="1"
              />
              <Text style={styles.smallText}>Last received in 2019</Text>
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton color="#57BEBB" uncheckedColor="#57BEBB" value="2" />
              <Text style={styles.smallText}>Last received before 2019</Text>
            </View>
          </RadioButton.Group>
          <Text>SCHOOL INFRASTRUCTURE BY TYPE:</Text>
          <Text style={[styles.smallText, styles.marginV]}>(Type Numbers)</Text>
          <Text>1. Number of facilities available at your school: </Text>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Permanent </Text>
            <NumberInput />
            <Text style={styles.smallText}>Semi-Permanent (TLS) </Text>
            <NumberInput />
          </View>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Tukul/Rakuba </Text>
            <NumberInput />
            <Text style={styles.smallText}>Tent</Text>
            <NumberInput />
          </View>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Under the Tree </Text>
            <NumberInput />
            <Text style={styles.smallText}>Other </Text>
            <NumberInput />
          </View>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Total Classrooms </Text>
            <NumberInput />
            <Text style={styles.smallText}>
              # of classroom {"\n"} accessible for {"\n"} students with{"\n"}
              disabilities
            </Text>
            <NumberInput />
          </View>
          <Text>
            2. Number of toilets (pit latrines) available at your school by type{" "}
          </Text>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Male Toilets </Text>
            <NumberInput />
            <Text style={styles.smallText}>Female Toilets </Text>
            <NumberInput />
          </View>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Male Teacher's Toilets </Text>
            <NumberInput />
            <Text style={styles.smallText}>Female Teacher's Toilets </Text>
            <NumberInput />
          </View>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Total Toilets </Text>
            <NumberInput />
            <Text style={styles.smallText}>
              # of toilets {"\n"} accessible for {"\n"} students with{"\n"}
              disabilities{" "}
            </Text>
            <NumberInput />
          </View>
          <View style={styles.btnContainer}>
            <ButtonUI onPress={onSubmit}>Done</ButtonUI>
          </View>
        </CardUI>
      </View>
    </ScreenTemplate>
  );
};

export default SchoolInfrastructure;

const styles = StyleSheet.create({
  container: {
    maxHeight: 600,
  },
  smallText: {
    fontSize: 12,
  },
  marginV: {
    marginVertical: 7,
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
  choiceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btnContainer: {
    alignItems: "center",
    margin: 10,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  smallText: {
    fontSize: 12,
  },
});
