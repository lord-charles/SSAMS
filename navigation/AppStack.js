import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login-screen/Login";
import AppDrawer from "./AppDrawer";

const Stack = createNativeStackNavigator();
//This generally renders the drawer and all other screens
//All screens registered in one place i think.
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#2CA2A8",
      
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Login"
        options={{
          headerShown: true,
          title: "SAMS",
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 9,
            backgroundColor: "#57BEBB",
            color: "white",
          },
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          headerRight: () => null,
          headerLeft: () => null,
        }}
        component={Login}
      />
      <Stack.Screen
        options={{
          title: null,
        }}
        name="AppDrawer"
        component={AppDrawer}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { useNavigation } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Button, Text } from "react-native";

// const Drawer = createDrawerNavigator();

// const ProfileStack = createNativeStackNavigator();

// const HomeScreen = () => {
//   return <Text>Home screen</Text>;
// };
// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const openDrawer = () => {
//     navigation.openDrawer();
//   };
//   return (
//     <>
//       <Button
//         onPress={() => navigation.navigate("Settings")}
//         title="Go to Settings"
//       />
//       <Button title="Open Drawer" onPress={openDrawer} />
//     </>
//   );
// };
// const SettingsScreen = () => {
//   const navigation = useNavigation();

//   const openDrawer = () => {
//     navigation.openDrawer();
//   };
//   return (
//     <>
//       <Button title="Open Drawer" onPress={openDrawer} />
//       <Text>Settings screen</Text>
//     </>
//   );
// };

// const ProfileStackScreen = () => {
//   return (
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen name="Profile" component={ProfileScreen} />
//       <ProfileStack.Screen name="Settings" component={SettingsScreen} />
//     </ProfileStack.Navigator>
//   );
// };

// const AppStack = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Profile" component={ProfileStackScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default AppStack;
