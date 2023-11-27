import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import ButtonUI from "../../components/UI/ButtonUI";
import { useNavigation } from "@react-navigation/native";


import Modal from "react-native-modal";

const StudentFlatlist = ({ allStudents, searchText }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    // Simulate initial data fetching
    // You might want to replace this with a real API call
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);

    // Simulate fetching more data from the server
    setTimeout(() => {
      // Assuming nextPageData is the new data you fetch from the server
      const nextPageData = /* Fetch the next page of data */ [];

      if (nextPageData.length > 0) {
        // Concatenate the new data with the existing data
        setAllStudents((prevStudents) => [...prevStudents, ...nextPageData]);
      } else {
        // No more data to load
        setEndReached(true);
      }

      setLoading(false);
    }, 1000); // Adjust the timeout as needed
  };

  const renderStudent = ({ item, index }) => {
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? styles.evenRow : "";

    const studentName = `${item.stFName || ""} ${item.stLName || ""}`;
    const admissionNumber = item.stRef || "";
    const gender = item.stGender || "";

    if (searchText.length > 0 && !studentName.toLowerCase().includes(searchText.toLowerCase())) {
      return null; // Skip rendering if the name doesn't match the search text
    }

    return (
      <View style={[styles.studentContainer, rowStyle]}>
        <Text style={styles.studentInfo}>{studentName}</Text>
        <Text style={styles.studentInfo}>{admissionNumber}</Text>
        <Text style={styles.studentInfo}>{gender}</Text>
        <ButtonUI onPress={() => openModal(item)}>More Info</ButtonUI>
      </View>
    );
  };

  const onEndReached = () => {
    if (!loading && !endReached) {
      fetchData();
    }
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={allStudents}
        renderItem={renderStudent}
        keyExtractor={(item) => (item.idStudent ? item.idStudent.toString() : "")}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />

      {selectedStudent && (
        <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>FirstName: {selectedStudent.stFName}</Text>
            <Text style={styles.modalText}>LastName: {selectedStudent.stLName}</Text>
            <Text style={styles.modalText}>Reference ID: {selectedStudent.stRef}</Text>
            <Text style={styles.modalText}>Master SSID: {selectedStudent.stMasterASID}</Text>
            <Text style={styles.modalText}>Gender: {selectedStudent.stGender === 'M' ? 'Male' : 'Female'}</Text>
            <Text style={styles.modalText}>Date Added: {selectedStudent.stAdded}</Text>
            <Text style={styles.modalText}>Special Needs: {selectedStudent.stSpecialNeeds === 0 ? 'Not a special needs student' : 'Special needs student'}</Text>
            <Text style={styles.modalText}>Refugee: {selectedStudent.stRefugee === 0 ? 'No' : 'Yes'}</Text>
            <Text style={styles.modalText}>Special Needs: {selectedStudent.stGrade}</Text>
            <ButtonUI onPress={closeModal}>Close</ButtonUI>
          </View>
        </Modal>
      )}

      <View style={styles.buttonContainer2}>
        <ButtonUI onPress={() => navigation.navigate("AddStudent")}>ADD NEW STUDENT</ButtonUI>
      </View>
    </View>
  );
};

// ... (other styles)


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
  evenRow: {
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonContainer2: {
    alignItems: "center",
    marginBottom: 10,
  },
});

export default StudentFlatlist;
