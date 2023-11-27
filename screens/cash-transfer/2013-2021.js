import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { data2 } from "../../utils/data";
import SearchHeader from "./Search/SearchHeader";
import { base_url } from "../../utils/baseUrl";
import axios from "axios";
import tw from "twrnc";
import LottieView from "lottie-react-native";
import CustomModal from "./Modal";

const PreviousData = () => {
  const navigation = useNavigation();

  const [countyNames, setCountyNames] = useState([]);
  const [countyName
    , setCountyName] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isfetchingPayam, setIsfetchingPayam] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const onClose = ()=>{setModalVisible(false)}

  const fetchCounties = async () => {
    setIsloading(true)
    try {
      const res = await axios.get(`${base_url}data-set/get/county`);
      setCountyNames(res.data);
    setIsloading(false);

    } catch (err) {
      console.log("Error: ", err);
    setIsloading(false);

    }
  };


  useEffect(() => {
    fetchCounties();
  }, []);

  //   useFocusEffect(
  //     useCallback(() => {

  // fetchCounties()
  //       return () => {};
  //     }, [])
  //   );

    const renderRow = ({ item, index }) => (
      <View style={tw`p-1`}>
        <TouchableOpacity
          style={tw`bg-[#55BABB] p-1.5 rounded-md flex flex-row gap-x-1 w-[170px] h-[40px] items-center`}
          onPress={() => {setCountyName(item.countyName), setModalVisible(true);}}
        >
          <Text style={tw`text-white font-semibold`}>{index + 1}.</Text>
          <Text style={tw`text-white`}>{item.countyName}</Text>
        </TouchableOpacity>
      </View>
    );


  return (
    <View>
      <SearchHeader data={countyNames} setCountyNames={setCountyNames} />

      {modalVisible && (
        <CustomModal
          countyName={countyName}
          navigation={navigation}
          isVisible={modalVisible}
          setModalVisible={setModalVisible}
          onClose={() => setShowFilterModal(false)}
        />
      )}

      {isLoading && (
        <View style={tw`absolute top-[36%] left-[28%] z-50 `}>
          <LottieView
            source={require("../../assets/lottie/loading2.json")}
            autoPlay
            loop
            width={190}
            height={150}
          />
        </View>
      )}

      <FlatList
        data={countyNames}
        removeClippedSubviews={true}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          paddingHorizontal: 2,
          justifyContent: "center",
        }}
        ListHeaderComponent={
          <>
            <View>
              <Text
                style={tw`text-black font-bold text-[20px] text-center p-2`}
              >
                County Level
              </Text>
            </View>
          </>
        }
        renderItem={renderRow}
        keyExtractor={(item) => `${item.countyName}}`}
        ListFooterComponent={
          <View>
            <View style={tw`h-[100px]`}></View>
          </View>
        }
      />
    </View>
  );
};

export default PreviousData;

//  <View style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
//         <TextInput
//           style={{
//             height: 40,
//             borderColor: "gray",
//             borderWidth: 1,
//             marginBottom: 10,
//             padding: 10,
//           }}
//           placeholder="Search by School Name"
//           value={schoolName}
//           onChangeText={(text) => setSchoolName(text)}
//         />
//         <TextInput
//           style={{
//             height: 40,
//             borderColor: "gray",
//             borderWidth: 1,
//             marginBottom: 10,
//             padding: 10,
//           }}
//           placeholder="Search by County Name"
//           value={countyName}
//           onChangeText={(text) => setCountyName(text)}
//         />
//         <TextInput
//           style={{
//             height: 40,
//             borderColor: "gray",
//             borderWidth: 1,
//             marginBottom: 10,
//             padding: 10,
//           }}
//           placeholder="Search by Payam Name"
//           value={payamName}
//           onChangeText={(text) => setPayamName(text)}
//         />

//         <Button title="Search" onPress={() => fetchData(1)} />
//       </View>
