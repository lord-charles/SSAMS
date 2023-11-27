import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CheckboxUI from "../../components/UI/CheckboxUI";
import ButtonUI from "../../components/UI/ButtonUI";
import AlertUI from "../../components/UI/AlertUI";
import { Alert } from "react-native";
import InputAlert from "../../components/UI/InputAlert";
import { useNavigation } from "@react-navigation/native";

const MarkAttendanceFlatlist = ({
  studentsPerPage,
  allStudents,
  checkboxChange,
}) => {
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

  const renderStudent = ({ item, index }) => {
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? styles.evenRow : "";

    return (
      <View style={[styles.studentContainer, rowStyle]}>
        <Text style={styles.studentInfo}>{item.name}</Text>
        <Text style={styles.studentInfo}>{item.admissionNumber}</Text>
        <Text style={styles.studentInfo}>{item.gender}</Text>
        <Text style={styles.studentInfo}>{(item.status = "active")}</Text>
        <CheckboxUI
          checked={item.isChecked}
          handleCheck={checkboxChange.bind(null, item.id)}
        />
      </View>
    );
  };

  const renderPaginationDot = (pageIndex) => {
    const isActive = pageIndex === currentPage;

    return (
      <View
        style={[styles.paginationDot, isActive && styles.activeDot]}
        key={pageIndex}
      />
    );
  };

  const navigation = useNavigation();

  const [alertVisible, setAlertVisible] = useState(false);
  const [inputAlertVisible, setInputAlertVisible] = useState({});

  const handleAlertOnClose = () => {
    navigation.navigate("Class");
  };

  const handleInputAlertOnClose = (id) => {
    allStudents.map((student) =>
      student.id === id
        ? (student.isChecked = true)
        : (student.isChecked = student.isChecked)
    );
    setInputAlertVisible(false);
  };

  const onSubmitHandler = () => {
    let isAllPresent = true;

    for (let i = 0; i < allStudents.length; i++) {
      const student = allStudents[i];
      if (student.isChecked === false) {
        console.log(student.name + " is absent");
        isAllPresent = false;
        setInputAlertVisible({ name: student.name, id: student.id });
        break; // Break the loop when the first absent student is found
      }
    }

    if (isAllPresent) {
      setAlertVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <InputAlert
        visible={Object.keys(inputAlertVisible).length > 0}
        message={inputAlertVisible}
        onSubmit={handleInputAlertOnClose}
      />

      <AlertUI
        visible={alertVisible}
        title="Success!"
        message="Your submission of attendance of grade P1 is successful."
        onClose={handleAlertOnClose}
        iconName={"checkmark-circle-sharp"}
        iconColor={"#57BEBB"}
      />
      <FlatList
        data={allStudents.slice(
          currentPage * studentsPerPage,
          (currentPage + 1) * studentsPerPage
        )}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.paginationContainer}>
        {Array.from({ length: totalPages }, (_, index) =>
          renderPaginationDot(index)
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.paginationButton, styles.prevButton]}
          disabled={currentPage === 0}
          onPress={handlePrevPage}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paginationButton, styles.nextButton]}
          disabled={currentPage === totalPages - 1}
          onPress={handleNextPage}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer2}>
        <ButtonUI onPress={onSubmitHandler}>SUBMIT</ButtonUI>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  studentContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
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
    margin: 15,
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
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  evenRow: {
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  buttonContainer2: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default MarkAttendanceFlatlist;
