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
} from "react-native";
import ButtonUI from "../../components/UI/ButtonUI";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

const EligibilityFlatlist2021 = ({
  studentsPerPage,
  allStudents,
  handleRefresh,
}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  initialPage = 0;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(allStudents.length / studentsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage >= totalPages ? prevPage : nextPage;
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleValidatePress = (item) => {
    setSelectedStudent(item);
    setModalVisible(true);
  };
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
        <Text style={styles.buttonText}>Submit</Text>
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
          {item.firstname || "N/A"} {item.middlename}
        </Text>
        <Text style={styles.studentInfo}>{item.reference || "N/A"}</Text>

        <Text style={styles.studentInfo}>
          {item.age ? item.age : item.over18 === "N" ? "under 18" : "over 18"}
        </Text>
        <ButtonUI
          onPress={() => handleValidatePress(item)}
          disabled={
            item.age && item.age>=15 ? false : item.over18 === "N" ? true : false
          }
        >
          Validate
        </ButtonUI>
      </View>
    );
  };



  return (
    <View style={styles.container}>
      <FlatList
        data={allStudents}
        renderItem={renderStudent}
        keyExtractor={(item) => item.idx.toString()}
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
            <Text style={styles.modalText}>
              {selectedStudent ? selectedStudent.firstname : "N/A"}
              {selectedStudent ? selectedStudent.middlename : "N/A"}{" "}
              {selectedStudent ? selectedStudent.lastname : "N/A"}
            </Text>
            <Text style={styles.dobtext}>
              {selectedStudent ? selectedStudent.dob : "N/A"}
            </Text>
            <Text style={styles.validation}> Validation</Text>

            {/* Add spacing between the boxes */}
            <View style={styles.spacing} />

            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>is Student over18</Text>
              <TextInput
                style={styles.inputFieldReadOnly}
                value={
                  selectedStudent
                    ? selectedStudent.over18 === "N"
                      ? "No"
                      : "Yes"
                    : "N/A"
                }
                editable={false}
              />
            </View>

            {/* Attendance Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>
                What is the student's attendance
              </Text>
              {/* <TextInput
    style={styles.inputFieldReadOnly}
    value={selectedStudent ? (String(selectedStudent.attendance) || 'N/A') : 'N/A'}
    editable={false}
  /> */}
            </View>

            {/* Gender Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Gender</Text>
              <TextInput
                style={styles.inputFieldReadOnly}
                value={
                  selectedStudent
                    ? selectedStudent.gender === "F"
                      ? "Female"
                      : "Male"
                    : "N/A"
                }
                editable={false}
              />
            </View>
            <View style={styles.buttonContainer}>
              {/* Render the Submit button conditionally */}
              {renderSubmitButton()}

              {/* Close button */}
              <TouchableOpacity
                style={[styles.button, styles.closeButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EligibilityFlatlist2021;

const styles = StyleSheet.create({
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
    backgroundColor: "#f2f2f2", // Optional: A different background color to indicate readonly
    color: "#000", // Set the text color
    fontSize: 16, // Set the font size
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
    width: 40, // Adjust the width as needed
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
    width: 20, // Adjust this value as needed
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
    marginBottom: 10,
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
    marginRight: 5,
    marginBottom: 10,
  },
  squeezedButton: {
    backgroundColor: "#58bcbc",
    marginRight: 5,
    marginTop: 10, // Add margin at the top to make it look squeezed at the bottom
    marginBottom: 5, // Add margin at the bottom to make it look squeezed
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
