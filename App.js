import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import useRoute from "./router";


export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  const routing = useRoute(true);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },
// });
