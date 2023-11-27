import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: "#2CA2A8",
        }}
      >
          <View style={styles.profileView}>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <Image
              source={require("../assets/images/login.png")}
              style={styles.imageStyle}
            />
            <Text style={{ color: "white" }}>Ahmed Lukman</Text>
        </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 15 }}>
            <DrawerItemList {...props} />
          </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#24184D",
          borderTopWidth: 1,
          width: "100%",
          backgroundColor: "lightgray",
        }}
      >
        <TouchableOpacity
          style={{ width: "100%", alignItems: "center", padding: 10 }}
          onPress={() => {
            console.log("Pressed!");
          }}
        >
          <Feather name="power" size={22} color="black" />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 15
  },
  profileView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
});

// import {
//   Image,
//   ImageBackground,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React from "react";
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from "@react-navigation/drawer";
// import { Feather } from "@expo/vector-icons";

// const CustomDrawer = (props) => {
//   return (
//     <View style={{ flex: 1 }}>
//       <DrawerContentScrollView
//         {...props}
//         contentContainerStyle={{
//           backgroundColor: "#2CA2A8",
//         }}
//       >
//         <DrawerItem
//           label={() => (
//             <View style={styles.profileView}>
//               <Image
//                 source={require("../assets/images/login.png")}
//                 style={styles.imageStyle}
//               />
//               <Text style={{ color: "white" }}>Ahmed Lukman</Text>
//             </View>
//           )}
//           onPress={() => {
//             // Handle profile item press
//           }}
//         />
//         <View style={{ flex: 1, backgroundColor: "white", paddingTop: 15 }}>
//           <DrawerItemList {...props} />
//         </View>
//       </DrawerContentScrollView>
//       <View
//         style={{
//           borderTopColor: "#24184D",
//           borderTopWidth: 1,
//           width: "100%",
//           backgroundColor: "lightgray",
//         }}
//       >
//         <TouchableOpacity
//           style={{ width: "100%", alignItems: "center", padding: 10 }}
//           onPress={() => {
//             console.log("Pressed!");
//           }}
//         >
//           <Feather name="power" size={22} color="black" />
//           <Text>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default CustomDrawer;

// const styles = StyleSheet.create({
//   imageStyle: {
//     height: 80,
//     width: 80,
//     borderRadius: 40,
//   },
//   profileView: {
//     flex: 1,
//     alignItems: "center",
//     gap: 10,
//     marginBottom: 20,
//   },
// });
