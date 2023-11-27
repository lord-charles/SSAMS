import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import HeadingText from "../../components/UI/HeadingText";
import ButtonUI from "../../components/UI/ButtonUI";
import EligibilityFlatlist from "./EligibilityFlatList";
import EligibilityFlatlist2021 from "./EligibilityFlatList2021";
import axios from "axios";
import tw from "twrnc";
import LottieView from "lottie-react-native";
import { base_url } from "../../utils/baseUrl";

const Eligibility = ({ route }) => {
  const studentsPerPage = 10;
  const { school_name, year } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (year !== 2023) {
        const response = await axios.get(
          `http://35.244.58.160/mobile-api/processvalid?school_name=${school_name}`
        );
        setData(response.data.students);

      } else {
        const response = await axios.post(
          `${base_url}data-set/get/2023_data/county/payam/schools/students`,
          {
            schoolName: school_name,
          }
        );
        setData(response.data);
      }
        // const response = await axios.post(
        //   `${base_url}data-set/get/2023_data/county/payam/schools/students`,
        //   {
        //     schoolName: school_name,
        //   }
        // );
        // setData(response.data);
        // console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [school_name, refreshFlag]);

  const handleRefresh = () => {
    setRefreshFlag((prevFlag) => !prevFlag);
  };

  return (
    <ScreenTemplate>
      <View style={styles.view}>
        <View style={styles.headingView}>
          <HeadingText>
            Instructions:Please review this list in detail to ensure that the
            information stored on SAMS is correct.Use the following codes to
            fill the Relevant code column:
          </HeadingText>
        </View>

        <View style={styles.listHeaders}>
          <Text style={styles.listHeader}>Name</Text>
          <Text style={styles.listHeader}>Ref No.</Text>
          <Text style={styles.listHeader}>Age Status</Text>
          <Text style={styles.listHeader}>Validation Status</Text>
        </View>

        {error && (
          <Text style={{ color: "red", marginVertical: 10 }}>{error}</Text>
        )}

        <View>
          {loading && (
            <View style={tw`absolute top-[35%] left-[26%] z-50 `}>
              <LottieView
                source={require("../../assets/lottie/loading2.json")}
                autoPlay
                loop
                width={190}
                height={150}
              />
            </View>
          )}
        </View>
        {
          year ===2023 ?

        <EligibilityFlatlist
          studentsPerPage={studentsPerPage}
          allStudents={data}
          handleRefresh={handleRefresh}
        />
        :
        <EligibilityFlatlist2021
          studentsPerPage={studentsPerPage}
          allStudents={data}
          handleRefresh={handleRefresh}
        />
}
      </View>
    </ScreenTemplate>
  );
};

export default Eligibility;

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
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  blueRectangle: {
    backgroundColor: "#404474",
    padding: 5,
    marginBottom: 1.5, // Adjust as needed
  },
  nameContainer: {
    flex: 1,
  },

  stateContainer: {
    flex: 1,
  },

  nameText: {
    color: "lightblue",
    fontWeight: "bold",
  },

  stateText: {
    color: "skyblue",
    fontWeight: "bold",
  },
  rectangleText: {
    color: "white",
    fontWeight: "bold",
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
    backgroundColor: "rgba(240, 240, 240, 0.5)",
    borderRadius: 10,
  },
  headingView: {
    textAlign: "left",
    marginVertical: 20,
  },
  smallText: {
    fontSize: 11,
    color: "#23174C",
  },
  buttonView: {
    width: "95%",
    alignItems: "flex-end",
  },
});
