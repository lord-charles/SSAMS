import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
  TextInput,
  Image,
} from "react-native";
import ButtonUI from "../../components/UI/ButtonUI";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
import { Center, CheckIcon, FormControl, Input, Radio, Select, TextArea, WarningOutlineIcon } from "native-base";
import { icons } from "../../constants";


const EligibilityFlatlist = ({
  studentsPerPage,
  allStudents,
  handleRefresh,
}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isAlp, setisAlp] = useState("one");
  const [isAlp2, setisAlp2] = useState(false);
  const [attendanceValue, setAttendanceValue] = useState(null);
    const [service, setService] = React.useState("");




  const [selectedStudent, setSelectedStudent] = useState(null);

  initialPage = 0;

  const handleSubmission = async () => {
    try {
      // Assuming you have a function to make a network request
      const response = await updateValidation(selectedStudent.idx);

      if (response.success) {
        console.log("Validation updated successfully");
      } else {
        console.error("Validation update failed");
        // Handle the case where the validation update was not successful
      }

      // Close the modal whether the update was successful or not
      setModalVisible(false);
      handleRefresh();
    } catch (error) {
      console.error("Error updating validation:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const updateValidation = async (studentIdx) => {
    try {
      const response = await fetch(
        "http://35.244.58.160/mobile-api/updatevalid",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentIdx: studentIdx,
          }),
        }
      );

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw new Error("Error updating validation:", error);
    }
  };
  const renderSubmitButton = () => {
    // Add conditions to check if any of the required values are null or meet specific conditions
    if (
      selectedStudent &&
      (selectedStudent.over18 === "N" || selectedStudent.gender === "M") &&
      (selectedStudent.age === null || selectedStudent.attendance === null)
    ) {
      return null; // Return null to render nothing
    }
    return (
      <TouchableOpacity
        style={[styles.button, styles.submitButton]}
        onPress={handleSubmission}
      >
        <Text style={styles.buttonText}>Disburse</Text>
      </TouchableOpacity>
    );
  };

  const renderStudent = ({ item, index }) => {
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? styles.evenRow : "";
    const ageStatus = item.agestatus > 15 ? "Over 15" : "Below 15";

    return (
      <View style={[styles.studentContainer, rowStyle]}>
        <Text style={tw`font-bold`}>{index + 1}.</Text>
        <Text style={styles.studentInfo}>
          {" "}
          {item["first name"] || "N/A"} {item["middle name"]}
        </Text>
        <Text style={styles.studentInfo}>{item.reference || "N/A"}</Text>

        <Text style={styles.studentInfo}>
          {item.age ? item.age : item.over18 === "N" ? "under 18" : "over 18"}
        </Text>
        <ButtonUI
          onPress={() => {
            setModalVisible(true), setSelectedStudent(item);
          }}
          disabled={
            item.age && item.age >= 15
              ? false
              : item.over18 === "N"
              ? true
              : false
          }
        >
          Validate
        </ButtonUI>
      </View>
    );
  };

  const renderAlpFields = () => {
    return (
      <View style={tw`p-2`}>
        <View style={tw`flex flex-row pb-3`}>
          <Input mx="3" placeholder="Guardian Name" w="40%" />
          <Input mx="3" placeholder="Contact" w="40%" />
        </View>
        <View style={tw`flex flex-row`}>
          <Input mx="3" placeholder="Relevant Code" w="40%" />
          <Input mx="3" placeholder="CTEF Serial No" w="40%" />
        </View>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={allStudents}
        renderItem={renderStudent}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerModalContainer}>
            <TouchableOpacity
              style={tw`absolute top-[10px] z-50 right-[15px]`}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={icons.cross}
                style={tw`w-[20px] bg-gray-200 h-[20px] rounded-md p-3`}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {selectedStudent ? (
              <Text style={styles.modalText}>
                {selectedStudent["first name"]} {selectedStudent["middle name"]}
              </Text>
            ) : (
              "N/A"
            )}
            <Text style={styles.dobtext}>
              {selectedStudent ? selectedStudent.dob : "N/A"}
            </Text>

            {/* Attendance Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>
                1. What is the student's attendance
              </Text>

              <Select
                selectedValue={service}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Poor (0 to 20)%" value="Poor" />
                <Select.Item label="Good (21 to 40)%" value="Good" />
                <Select.Item label="Excellent (41 to 60)%" value="Excellent" />
                <Select.Item
                  label="Outstanding (61 to 80)%"
                  value="Outstanding"
                />
                <Select.Item
                  label="Exceptional (81 to 100)%"
                  value="Exceptional"
                />
              </Select>
            </View>

            <View style={tw`mt-4`}>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={isAlp}
                onChange={(nextValue) => {
                  setisAlp(nextValue);
                }}
              >
                <Text style={tw`text-black font-bold text-[16.5px]`}>
                  2. Is student in ALP program
                </Text>
                <View style={tw`flex flex-row gap-x-5`}>
                  <Radio
                    shadow={2}
                    value="one"
                    my="2"
                    onPress={() => {
                      setisAlp2(false);
                    }}
                  >
                    No
                  </Radio>
                  <Radio
                    shadow={2}
                    value="two"
                    my="2"
                    onPress={() => {
                      setisAlp2(true);
                    }}
                  >
                    Yes
                  </Radio>
                </View>
              </Radio.Group>
            </View>

            {isAlp2 && renderAlpFields()}

            <View>
              <View style={tw`p-1 flex flex-row items-center`}>
                <Text style={tw`text-black font-bold text-[16.5px]`}>
                  3. Correction Needed
                </Text>
                <Text style={tw`text-gray-500 p-1 text-[13.5px]`}>
                  (optional)
                </Text>
              </View>

              <View style={tw`w-[200px] flex flex-row`}>
                <TextArea h={20} placeholder="write here..." w="200" />
              </View>
            </View>

            <View style={styles.buttonContainer}>{renderSubmitButton()}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EligibilityFlatlist;

const styles = StyleSheet.create({
 attendance:{ backgroundColor: "#57BEBB", paddingHorizontal:10, paddingVertical:10, width:130, borderRadius:5 },
  container: {
    flex: 1,
    margin: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  inputFieldReadOnly: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f2f2f2",
    color: "#000",
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    borderWidth: 1,
    borderColor: "#58bcbc",
    borderRadius: 5,
    padding: 10,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "transparent",
  },
  optionText: {
    marginLeft: 5,
    marginRight: 5,
  },
  spacing: {
    width: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
  },

  innerModalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%", // Adjust the width as needed
  },
  inputContainer: {
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  modalText: {
    color: "#404474",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  dobtext: {
    color: "#404474",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  validation: {
    color: "#404474",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },

  studentContainer: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  studentInfo: {
    fontSize: 13,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#58bcbc",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 14,
  },
  squeezedButton: {
    backgroundColor: "#58bcbc",
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: "#ccc",
    marginLeft: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  paginationButton: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  prevButton: {
    marginRight: 5,
    backgroundColor: "#ccc",
  },
  nextButton: {
    marginLeft: 5,
    backgroundColor: "blue",
  },
  evenRow: {
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
});
