import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import { MaterialIcons } from "@expo/vector-icons";
import HeaderRight from "../components/UI/HeaderRight";
import Home from "../screens/home/Home";
import Report from "../screens/reports/Report";
import SchoolInfoStack from "./SchoolInfoStack";
import EnrolmentStack from "./EnrolmentStack";
import HeaderLeft from "../components/UI/HeaderLeft";
import ClassStack from "./ClassStack";
import CashTransfer from "./CashTransfer";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#2CA2A8",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#24184D",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 9,
          backgroundColor: "#57BEBB",
        },
        headerBackVisible: false,
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
        },
        headerRight: () => <HeaderRight />,
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Drawer.Screen
        options={{
          headerLeft: false,
          drawerIcon: ({ color }) => (
            <MaterialIcons name="house" size={24} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />

      <Drawer.Screen
        name="SchoolInfoStack"
        component={SchoolInfoStack}
        options={{
          title: "School Info",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="class" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="EnrolmentStack"
        component={EnrolmentStack}
        options={{
          title: "Enrolment",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="class" size={24} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="ClassStack"
        component={ClassStack}
        options={{
          headerLeft: false,
          title: "Class",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="class" size={24} color={color} />
          ),
        }}
      />

    <Drawer.Screen
        name="CashTransfer"
        component={CashTransfer}
        options={{
          headerLeft: false,
          title: "Cash Transfers",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="class" size={24} color={color} />
          ),
        }}
   />

      {/*
      <Drawer.Screen
        name="Class"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="people-alt" size={24} color={color} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Exams"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color={color} />
          ),
        }}
      /> */}
      {/* <Drawer.Screen
        name="Infrastructure"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="tools" size={24} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Reports"
        component={Report}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="article" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="settings" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="help-outline" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Home}
        options={{
          headerLeft: false,
          // drawerLabel: () => null, // Hide the label in the drawer
          // drawerActiveBackgroundColor: null,
          // drawerActiveTintColor: null,
          // drawerInactiveTintColor: null,
          drawerItemStyle: { display: "none" }, // Hide the item in the drawer
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import CustomDrawer from "./CustomDrawer";
// import { MaterialIcons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { TouchableOpacity, Image } from "react-native";
// import HeaderRight from "../components/UI/HeaderRight";
// import Home from "../screens/home/Home";
// import Enrolment from "../screens/enrolment/Enrolment";
// import RecordSchoolInfo from "../screens/school-info/RecordSchoolInfo";
// import SchoolInfrastructure from "../screens/school-info/SchoolInfrastructure";
// import SchoolOwnership from "../screens/school-info/SchoolOwnership";
// import BasicSchoolInfo from "../screens/school-info/BasicSchoolInfo";
// import AppStack from "./AppStack";
// import AddStudent from "../screens/enrolment/AddStudent";
// import { Ionicons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator();

// const SchoolInfoStack = () => (
//   <Drawer.Navigator
//     drawerContent={(props) => <CustomDrawer {...props} />}
//     screenOptions={{
//       drawerActiveBackgroundColor: "#2CA2A8",
//       drawerActiveTintColor: "white",
//       drawerInactiveTintColor: "#24184D",
//       headerTitleAlign: "center",
//       headerStyle: {
//         elevation: 9,
//         backgroundColor: "#57BEBB",
//       },
//       headerBackVisible: false,
//       headerTitleStyle: {
//         color: "white",
//         fontWeight: "bold",
//       },
//       headerRight: () => <HeaderRight />,
//       headerLeft: () => {
//         const navigation = useNavigation();

//         return (
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <Image
//               source={require("../assets/images/hamburger.png")}
//               style={{ marginLeft: 10 }}
//             />
//           </TouchableOpacity>
//         );
//       },
//     }}
//   >
//     <Drawer.Screen
//       name="RecordSchoolInfo"
//       component={RecordSchoolInfo}
//       options={{
//         title: "School Info",
//         drawerIcon: ({ color }) => (
//           <Ionicons name="school" size={24} color={color} />
//         ),
//       }}
//     />

//     <Drawer.Screen
//       name="BasicSchoolInfo"
//       component={BasicSchoolInfo}
//       options={{
//         title: "Basic School Info",
//       }}
//     />

//     <Drawer.Screen
//       name="SchoolInfrastructure"
//       component={SchoolInfrastructure}
//       options={{
//         title: "School Infrastructure",
//       }}
//     />

//     <Drawer.Screen
//       name="SchoolOwnership"
//       component={SchoolOwnership}
//       options={{
//         title: "School Ownership",
//       }}
//     />
//   </Drawer.Navigator>
// );

// const AppDrawer = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawer {...props} />}
//       screenOptions={{
//         drawerActiveBackgroundColor: "#2CA2A8",
//         drawerActiveTintColor: "white",
//         drawerInactiveTintColor: "#24184D",
//         headerTitleAlign: "center",
//         headerStyle: {
//           elevation: 9,
//           backgroundColor: "#57BEBB",
//         },
//         headerBackVisible: false,
//         headerTitleStyle: {
//           color: "white",
//           fontWeight: "bold",
//         },
//         headerRight: () => <HeaderRight />,
//         headerLeft: () => {
//           const navigation = useNavigation();

//           return (
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <Image
//                 source={require("../assets/images/hamburger.png")}
//                 style={{ marginLeft: 10 }}
//               />
//             </TouchableOpacity>
//           );
//         },
//       }}
//     >
//       <Drawer.Screen
//         options={{
//           headerShown: false,
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="house" size={24} color={color} />
//           ),
//         }}
//         name="Home"
//         component={AppStack}
//       />

//       <Drawer.Screen
//         name="AddStudent"
//         options={{
//           title: "Enrolment",
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//         component={AddStudent}
//       />

//       <Drawer.Screen
//         name="Enrolment"
//         component={Enrolment}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="class" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="SchoolInfo"
//         component={SchoolInfoStack}
//         options={{
//           drawerIcon: ({ color }) => (
//             <Ionicons name="school" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Class"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="people-alt" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Exams"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <Entypo name="open-book" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Infrastructure"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <FontAwesome5 name="tools" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Reports"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="article" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Settings"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="settings" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Help"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="help-outline" size={24} color={color} />
//           ),
//         }}
//       />

//       <Drawer.Screen
//         name="Account"
//         component={Home}
//         options={{
//           // drawerLabel: () => null, // Hide the label in the drawer
//           // drawerActiveBackgroundColor: null,
//           // drawerActiveTintColor: null,
//           // drawerInactiveTintColor: null,
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default AppDrawer;

// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import CustomDrawer from "./CustomDrawer";
// import { MaterialIcons } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { TouchableOpacity, Image } from "react-native";
// import HeaderRight from "../components/UI/HeaderRight";
// import Home from "../screens/home/Home";
// import Enrolment from "../screens/enrolment/Enrolment";
// import RecordSchoolInfo from "../screens/school-info/RecordSchoolInfo";
// import SchoolInfrastructure from "../screens/school-info/SchoolInfrastructure";
// import SchoolOwnership from "../screens/school-info/SchoolOwnership";
// import BasicSchoolInfo from "../screens/school-info/BasicSchoolInfo";
// import AppStack from "./AppStack";
// import AddStudent from "../screens/enrolment/AddStudent";
// import { Ionicons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator();

// const AppDrawer = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawer {...props} />}
//       screenOptions={{
//         drawerActiveBackgroundColor: "#2CA2A8",
//         drawerActiveTintColor: "white",
//         drawerInactiveTintColor: "#24184D",
//         headerTitleAlign: "center",
//         headerStyle: {
//           elevation: 9,
//           backgroundColor: "#57BEBB",
//         },
//         headerBackVisible: false,
//         headerTitleStyle: {
//           color: "white",
//           fontWeight: "bold",
//         },
//         headerRight: () => <HeaderRight />,
//         headerLeft: () => {
//           const navigation = useNavigation();

//           return (
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <Image
//                 source={require("../assets/images/hamburger.png")}
//                 style={{ marginLeft: 10 }}
//               />
//             </TouchableOpacity>
//           );
//         },
//       }}
//     >
//       <Drawer.Screen
//         options={{
//           headerShown: false,
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="house" size={24} color={color} />
//           ),
//         }}
//         name="Home"
//         component={Home}
//       />

//       <Drawer.Screen
//         name="AddStudent"
//         options={{
//           title: "Enrolment",
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//         component={AddStudent}
//       />

//       <Drawer.Screen
//         name="Enrolment"
//         component={Enrolment}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="class" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="RecordSchoolInfo"
//         component={RecordSchoolInfo}
//         options={{
//           title: "School Info",
//           drawerIcon: ({ color }) => (
//             <Ionicons name="school" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="BasicSchoolInfo"
//         component={BasicSchoolInfo}
//         options={{
//           title: "School Info",
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//       />
//       <Drawer.Screen
//         name="Class"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="people-alt" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Exams"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <Entypo name="open-book" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Infrastructure"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <FontAwesome5 name="tools" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Reports"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="article" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Settings"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="settings" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Help"
//         component={Home}
//         options={{
//           drawerIcon: ({ color }) => (
//             <MaterialIcons name="help-outline" size={24} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Account"
//         component={Home}
//         options={{
//           // drawerLabel: () => null, // Hide the label in the drawer
//           // drawerActiveBackgroundColor: null,
//           // drawerActiveTintColor: null,
//           // drawerInactiveTintColor: null,
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//       />

//       <Drawer.Screen
//         name="SchoolInfrastructure"
//         component={SchoolInfrastructure}
//         options={{
//           title: "School Info",
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//       />
//       <Drawer.Screen
//         name="SchoolOwnership"
//         component={SchoolOwnership}
//         options={{
//           title: "School Info",
//           drawerItemStyle: { display: "none" }, // Hide the item in the drawer
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default AppDrawer;