import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home/Home';
import BasicSchoolInfo from '../screens/school-info/BasicSchoolInfo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordSchoolInfo from '../screens/school-info/RecordSchoolInfo';
import HeaderRight from '../components/UI/HeaderRight';
import HeaderLeft from '../components/UI/HeaderLeft';
import SchoolInfrastructure from '../screens/school-info/SchoolInfrastructure';
import SchoolOwnership from '../screens/school-info/SchoolOwnership';
import AddStudent from '../screens/enrolment/AddStudent'
import Report from '../screens/reports/Report'

const SchoolInfoStack = () => {
  const SchoolInfoStack = createNativeStackNavigator();

  return (
    <SchoolInfoStack.Navigator
      screenOptions={{
        // //   headerTitleAlign: "center",
        //   headerStyle: {
        //     elevation: 9,
        //     backgroundColor: "#57BEBB",
        //   },
        //   headerTintColor: "white",
        //   headerRight: () => <HeaderLeft />,
        // //   headerLeft: () => <HeaderLeft />,
        headerShown: true,
      }}
    >
      {/* nested screens such as basic school info */}
      <SchoolInfoStack.Screen
        name="RecordSchoolInfo"
        options={{
          headerShown: false
        }}
        component={RecordSchoolInfo}
      />
      <SchoolInfoStack.Screen
        options={{
          title: "Basic School Information",
        }}
        name="BasicSchoolInfo"
        component={BasicSchoolInfo}
      />
      <SchoolInfoStack.Screen
        options={{
          title: "School Infrastructure Info",
        }}
        name="SchoolInfrastructure"
        component={SchoolInfrastructure}
      />
      <SchoolInfoStack.Screen
        options={{
          title: "School Ownership Info",
        }}
        name="SchoolOwnership"
        component={SchoolOwnership}
      />
    </SchoolInfoStack.Navigator>
  );
};

export default SchoolInfoStack

const styles = StyleSheet.create({})