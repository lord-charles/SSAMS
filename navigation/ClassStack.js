import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Class from "../screens/class/Class";
import Attendance from "../screens/class/Attendance";
import MarkAttendance from "../screens/class/MarkAttendance";
import GetStudents from "../screens/class/GetStudents";

const ClassStack = () => {
  const ClassStack = createNativeStackNavigator();

  return (
    <ClassStack.Navigator>
      <ClassStack.Screen options={{
        headerShown: false
      }} name="Class" component={Class} />
      <ClassStack.Screen name="Attendance" component={Attendance} />
      <ClassStack.Screen options={{
        title: 'Mark Attendance'
      }} name="MarkAttendance" component={MarkAttendance} />
      <ClassStack.Screen options={{
        title: 'Get Students'
      }} name="GetStudents" component={GetStudents} />
    </ClassStack.Navigator>
  );
};

export default ClassStack;
