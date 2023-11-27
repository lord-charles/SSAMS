import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image } from "react-native";
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Divider, FlatList, Input } from "native-base";
import tw from "twrnc";
import LottieView from "lottie-react-native";
import axios from "axios";
import { icons } from "../../constants";
import { base_url } from "../../utils/baseUrl";

const CustomModal = ({
  isVisible,
  onClose,
  countyName,
  navigation,
  setModalVisible,
  year
}) => {
  const { height } = Dimensions.get("window");
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [school, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payams, setPayams] = useState([]);
  const [payam, setPayam] = useState("");

  const fetchPayams = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}${
          year === 2023
            ? "data-set/get/2023_data/county/payam"
            : "data-set/get/county/payam"
        }`,
        {
          countyName,
          county28: countyName,
        }
      );

      setPayams(res.data);
      res.data.length > 0 ? fetchSchools(res.data[0]._id) : null;
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      setLoading(false);
    }
  };

  const fetchSchools = async (payamName) => {
    setLoading(true);
    setPayam(payamName);
    try {
      const res = await axios.post(
        `${base_url}${
          year === 2023
            ? "data-set/get/2023_data/county/payam/schools"
            : "data-set/get/county/payam/schools"
        }`,
        {
          payamName,
          payam28: payamName,
        }
      );

      setSchools(res.data);
      setLoading(false);
    } catch (err) {
      console.log("Error: ", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayams();
  }, []);

  //animation
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height + 100, height - 570],
  });

  const renderRow = ({ item, index }) => (
    <View style={tw`p-2 min-w-[100px]`}>
      <TouchableOpacity
        style={tw`bg-[#55BABB] p-4 rounded-md flex flex-row gap-x-1 items-center justify-center`}
        onPress={() => {
          setPayam(item._id), fetchSchools(item._id);
        }}
      >
        <Text
          style={[
            tw` text-[18px] font-bold text-center `,
            { color: payam === item._id ? "#2A3168" : "white" },
          ]}
        >
          {item._id}
        </Text>
      </TouchableOpacity>
    </View>
  );
     const renderRow2 = ({ item, index }) => (
       <View style={tw`p-1 `}>
         <TouchableOpacity
           style={tw`bg-[#55BABB] p-2 rounded-md flex flex-row gap-x-1`}
           onPress={() => {
             navigation.navigate("Eligibility", { school_name: item._id, year }),
               setModalVisible(false);
           }}
         >
           <Text style={tw`text-white font-semibold`}>{index + 1}.</Text>
           <Text style={tw`text-white`}>{item._id}</Text>
         </TouchableOpacity>
       </View>
     );

  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", flex: 1 }}>
        {/* transparent background */}
        <TouchableOpacity onPress={() => setShowFilterModal(false)}>
          <View style={tw`absolute top-0 left-0 right-0 bottom-0`} />
        </TouchableOpacity>
        {/* animated pushup */}
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "80%",
            padding: 8,
            backgroundColor: "white",
          }}
        >
          {loading && (
            <View style={tw`absolute top-[15%] left-[28%] z-50 `}>
              <LottieView
                source={require("../../assets/lottie/loading2.json")}
                autoPlay
                loop
                width={190}
                height={150}
              />
            </View>
          )}

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={tw`absolute top-[-60px] right-2`}>
              <Image
                source={icons.cross}
                style={tw`w-[30px]`}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={tw`text-black font-bold text-[20px] text-center p-2`}>
              Payam Level({payams.length})
            </Text>
          </View>

          <View>
            <FlatList
              data={payams}
              removeClippedSubviews={true}
              snapToAlignment="center" // snapss on a page
              pagingEnabled //displays each image on its own page
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderRow}
              keyExtractor={(item) => `${item._id}}`}
              ListFooterComponent={
                <View>
                  <View style={tw`h-[0px]`}></View>
                </View>
              }
            />
          </View>

          <View style={tw`relative top-[10px]`}>
            <FlatList
              data={school}
              removeClippedSubviews={true}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <View>
                    <Divider />
                  </View>
                </>
              }
              renderItem={renderRow2}
              keyExtractor={(item) => `${item._id}}`}
              ListFooterComponent={
                <View>
                  <View style={tw`h-[250px]`}></View>
                </View>
              }
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;
