import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import StudentFlatlist from "../enrolment/StudentFlatlist";
import HeadingText from "../../components/UI/HeadingText";
import ButtonUI from "../../components/UI/ButtonUI";
import AttendanceFlatlist from "./AttendanceFlatlist";
import { useNavigation } from "@react-navigation/native";

const Attendance = () => {

  const navigation = useNavigation();

  const getStudentsPressHandler = () => {
    navigation.navigate("GetStudents")
  }

  const [loading, setLoading] = useState(true);
  const [allStudents, setAllStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const studentsPerPage = 10;

  const fetchData = useCallback(async (page) => {
    try {
      const response = await axios.get(`http://35.244.58.160:3000/students?page=${page}`);
      const fetchedStudents = response.data.students;

      if (page === 0) {
        setTotalPages(response.data.totalPages);
      }

      // Cache the fetched data
      await AsyncStorage.setItem('cachedStudents', JSON.stringify(fetchedStudents));

      setAllStudents(prevData => (page === 0 ? fetchedStudents : [...prevData, ...fetchedStudents]));
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

        await fetchData(0);
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    };

    loadInitialData();
  }, [fetchData]);

  const loadMoreData = () => {
    if (currentPage < totalPages - 1) {
      setLoading(true);
      fetchData(currentPage + 1);
    }
  };

  if (loading && currentPage === 0) {
    return (
      <ScreenTemplate>
        <ActivityIndicator size="large" color="#23174C" />
      </ScreenTemplate>
    );
  }


  return (
    <ScreenTemplate>
      <View style={styles.view}>
        <View style={styles.headingView}>
          <HeadingText>P3: Class List</HeadingText>
          <ButtonUI onPress={getStudentsPressHandler}>Mark Attendance</ButtonUI>
        </View>
        <View style={styles.border}></View>
        <View style={styles.listHeaders}>
          <Text style={styles.listHeader}>Name</Text>
          <Text style={styles.listHeader}>Adm No.</Text>
          <Text style={styles.listHeader}>Gender</Text>
          <Text style={styles.listHeader}>Nationality</Text>
          <Text style={styles.listHeader}>Action</Text>
        </View>
        <AttendanceFlatlist
          studentsPerPage={studentsPerPage}
          allStudents={allStudents}
        />
      </View>
    </ScreenTemplate>
  );
};

export default Attendance;

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
  headingView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
});
