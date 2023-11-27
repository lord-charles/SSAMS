// import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import AppStack from "./navigation/AppStack";
// import AppDrawer from "./navigation/AppDrawer";

// // ShowSplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "helvetica-neue": require("./assets/fonts/hnr.otf"),
//   });

//   //  const onLayoutRootView = useCallback(async () => {
//   //    if (fontsLoaded) {
//   //      await ShowSplashScreen.hideAsync();
//   //    }
//   //  }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <AppDrawer />
//       </NavigationContainer>
//     </>
//   );
// }

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppStack from "./navigation/AppStack";
import AppDrawer from "./navigation/AppDrawer";
import Toast from "react-native-toast-message";
import { NativeBaseProvider, Box } from "native-base";

// ShowSplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "helvetica-neue": require("./assets/fonts/hnr.otf"),
  });

  //  const onLayoutRootView = useCallback(async () => {
  //    if (fontsLoaded) {
  //      await ShowSplashScreen.hideAsync();
  //    }
  //  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <Toast />
    </NativeBaseProvider>
  );
}
