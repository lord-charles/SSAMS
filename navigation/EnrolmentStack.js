import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderRight from "../components/UI/HeaderRight";
import HeaderLeft from "../components/UI/HeaderLeft";
import AddStudent from "../screens/enrolment/AddStudent";
import Enrolment from "../screens/enrolment/Enrolment";
import StudentFlatlist from "../screens/enrolment/StudentFlatlist";

const EnrolmentStack = () => {
  const EnrolmentStack = createNativeStackNavigator();

  return (
    <EnrolmentStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      {/* nested screens such as basic school info */}
      <EnrolmentStack.Screen
        options={{
          headerShown: false,
        }}
        name="Enrolment"
        component={Enrolment}
      />
      <EnrolmentStack.Screen
        options={{
          title: "Add New Student",
        }}
        name="AddStudent"
        component={AddStudent}
      />
      <EnrolmentStack.Screen
        options={{
          title: "Student List",
        }}
        name="StudentList"
        component={StudentFlatlist}
      />
    </EnrolmentStack.Navigator>
  );
};

export default EnrolmentStack;

