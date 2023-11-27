
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CurrentData from './2023';
import PreviousData from './2013-2021';
import { View } from "react-native";

const PupilValidation = () => {
  const Tab = createMaterialTopTabNavigator();



  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: { fontSize: 16, fontWeight:700 },
          tabBarStyle: { backgroundColor: "white", },
          tabBarActiveTintColor: "skyblue",
          tabBarInactiveTintColor: "black",
          tabBarIndicatorStyle: { backgroundColor: "skyblue" },
        })}
      >
        <Tab.Screen name="2023" component={CurrentData} />
        <Tab.Screen name="2013-2021" component={PreviousData} />
      </Tab.Navigator>
    </View>
  );
};

export default PupilValidation;



