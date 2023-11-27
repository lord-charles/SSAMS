import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import HeadingText from "../../components/UI/HeadingText";
import ButtonUI from "../../components/UI/ButtonUI";
import MarkAttendanceFlatlist from "./MarkAttendanceFlatlist";
import { useState } from "react";

const MarkAttendance = () => {

  const studentsPerPage = 10;
  const allStudents = [
    // Comes from database
    {
      id: 1,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 2,
      name: "Jamey",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 3,
      name: "Imran",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 4,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 5,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 6,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 7,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 8,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 9,
      name: "John",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 10,
      name: "Mohammed",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 11,
      name: "Ahmed",
      admissionNumber: "12345",
      gender: "Male",
      nationality: "USA",
      isChecked: false,
    },
    {
      id: 12,
      name: "Aisha",
      admissionNumber: "12345",
      gender: "Female",
      nationality: "USA",
      isChecked: false,
    },
  ];

  const [data, setData] = useState(allStudents)
   
    const handleAllCheckboxChange = () => {
      setData((prevData) =>
        prevData.map((item) => {
            return { ...item, isChecked: true };       
        })
      );
    };

      const handleCheckboxChange = (itemId) => {
        setData((prevData) =>
          prevData.map((item) => {
            if (item.id === itemId) {
              return { ...item, isChecked: !item.isChecked };
            }
            return item;
          })
        );
      };

  return (
    <ScreenTemplate>
      <View style={styles.view}>
        <View style={styles.headingView}>
          <View style={styles.buttonView}>
            <ButtonUI onPress={handleAllCheckboxChange}>All Present</ButtonUI>
          </View>
          <HeadingText>P3</HeadingText>
          <View style={styles.border}></View>
          <Text style={styles.smallText}>Date: Feb 17, 2023</Text>
          {/* <ButtonUI onPress={allPresentPressHandler}>All Present</ButtonUI> */}
        </View>
        <View style={styles.listHeaders}>
          <Text style={styles.listHeader}>Name</Text>
          <Text style={styles.listHeader}>Adm No.</Text>
          <Text style={styles.listHeader}>Gender</Text>
          <Text style={styles.listHeader}>Status</Text>
          <Text style={styles.listHeader}>Presence</Text>
        </View>
        <MarkAttendanceFlatlist
          studentsPerPage={studentsPerPage}
          allStudents={data}
          checkboxChange={handleCheckboxChange}
        />
      </View>
    </ScreenTemplate>
  );
};

export default MarkAttendance;

const styles = StyleSheet.create({
  listHeaders: {
    flexDirection: "row",
    marginHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  listHeader: {
    fontSize: 12,
    flex: 1,
    textAlign: "center",
    color: "#23174C",
  },
  border: {
    borderWidth: 1, // Border width
    borderColor: "#23174C", // Border color
    marginBottom: 10,
    width: "70%",
  },
  view: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    borderRadius: 10,
  },
  headingView: {
    alignItems: "center",
    marginVertical: 20,
  },
  smallText: {
    fontSize: 11,
    color: "#23174C",
  },
  buttonView:{
    width: '95%',
    alignItems: 'flex-end'
  }
});
