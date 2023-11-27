import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet,TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import StudentFlatlist from './StudentFlatlist';
import ScreenTemplate from '../../components/UI/ScreenTemplate';
import HeadingText from '../../components/UI/HeadingText';

const Enrolment = () => {
  const [loading, setLoading] = useState(true);
  const [allStudents, setAllStudents] = useState([]);
  const [searchText, setSearchText] = useState('');

  const studentsPerPage = 10;

  const fetchData = useCallback(async (cursor) => {
    try {
      const response = await axios.get(`http://35.244.58.160/mobile-api/students?cursor=${cursor}`);
      const fetchedStudents = response.data.students;
  
      // Handle fetched data...
  
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);
  

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Check if data is already cached
        const cachedData = await AsyncStorage.getItem('cachedStudents');

        if (cachedData) {
          setAllStudents(JSON.parse(cachedData));
        }

        await fetchData();
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    };

    loadInitialData();
  }, [fetchData]);

  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);
      fetchData();
    }
  };

  if (loading && allStudents.length === 0) {
    return (
      <ScreenTemplate>
        <ActivityIndicator size="large" color="#23174C" />
      </ScreenTemplate>
    );
  }

  return (
    <ScreenTemplate>
      <View style={styles.view}>
        <HeadingText>All Students</HeadingText>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by student name"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <View style={styles.border}></View>
        <View style={styles.listHeaders}>
          <Text style={styles.listHeader}>Name</Text>
          <Text style={styles.listHeader}>Adm No.</Text>
          <Text style={styles.listHeader}>Gender</Text>
          <Text style={styles.listHeader}>Nationality</Text>
          <Text style={styles.listHeader}>Action</Text>
        </View>
        <StudentFlatlist
            studentsPerPage={studentsPerPage}
            allStudents={allStudents}
            onEndReached={loadMoreData}
            searchText={searchText}
          />
      </View>
    </ScreenTemplate>
  );
};

export default Enrolment;


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
    marginHorizontal: 15,
    marginBottom: 20,
  },
  view: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    borderRadius: 10,
  },
});
