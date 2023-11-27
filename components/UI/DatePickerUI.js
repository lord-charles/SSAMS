import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo } from "@expo/vector-icons";

const DatePickerUI = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }

    if (date !== undefined) {
      setSelectedDate(date);
  
      // Convert the Date object to a string
      const formattedDate = date.toISOString();
  
      // Call the onDateChange prop to update the parent state
      onDateChange(formattedDate);
    }
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const formatDate = (date) => {
    if (!date) {
      return "Select Date";
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <View style={styles.dateContainer}>
        <TouchableOpacity style={{ flex: 1 }} onPress={showDatePickerModal}>
          <TextInput
            style={[styles.input, { color: selectedDate ? "black" : "gray" }]}
            value={formatDate(selectedDate)}
            editable={false}
          />
        </TouchableOpacity>
        <Entypo
          onPress={showDatePickerModal}
          name="calendar"
          size={24}
          color="#57BEBB"
        />
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()} // Use current date if selectedDate is null
          mode="date"
          display="default"
          onChange={handleDateChange}
          style={{ backgroundColor: "#55BABB" }} // Change the background color here
        />
      )}
    </>
  );
};

export default DatePickerUI;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 7,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
    flex: 1,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
