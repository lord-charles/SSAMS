import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import ButtonUI from "../../components/UI/ButtonUI";
import { useNavigation } from "@react-navigation/native";

const AttendanceFlatlist = ({ studentsPerPage, allStudents }) => {
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
        <Text style={styles.studentInfo}>{item.nationality}</Text>
        <ButtonUI onPress={() => console.log(item.name + " pressed!")}>
          View
        </ButtonUI>
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


  return (
    <View style={styles.container}>
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
});

export default AttendanceFlatlist;
