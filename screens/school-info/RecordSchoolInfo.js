import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import RecordSchoolInfoBtn from "./RecordSchoolInfoBtn";
import { useNavigation } from "@react-navigation/native";
import HeadingText from "../../components/UI/HeadingText";
import { Button } from "react-native";

const RecordSchoolInfo = () => {

  const navigation = useNavigation();

  // const openDrawer = () => {
  //   navigation.openDrawer();
  // };

  // // Manually configure the header options
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     headerLeft: () => (
  //       <Button title="Back" onPress={() => navigation.goBack()} />
  //     ),
  //     headerRight: () => <Button title="Open Drawer" onPress={openDrawer} />,
  //   });
  // }, [navigation]);

  const basicInfoPress = () => {
    navigation.navigate("BasicSchoolInfo");
  }

  const schoolOwnershipPress = () => {
    navigation.navigate("SchoolOwnership");
  };

  const schoolInfrastrucurePress = () => {
    navigation.navigate("SchoolInfrastructure");
  };

  return (
    <ScreenTemplate>
        <HeadingText>Record School Information</HeadingText>
        <View style={styles.view}>
          <RecordSchoolInfoBtn onPress={basicInfoPress}>
            BASIC INFORMATION
          </RecordSchoolInfoBtn>
        </View>
        <View style={styles.view}>
          <RecordSchoolInfoBtn onPress={schoolOwnershipPress}>
            SCHOOL OWNERSHIP
          </RecordSchoolInfoBtn>
        </View>
        <View style={styles.view}>
          <RecordSchoolInfoBtn onPress={schoolInfrastrucurePress}>SCHOOL INFRASTRUCTURE</RecordSchoolInfoBtn>
        </View>
    </ScreenTemplate>
  );
};

export default RecordSchoolInfo;

const styles = StyleSheet.create({

  view: {
    alignItems: 'center',
    margin: 20
  }
});
