import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const isRegistr = false;
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/bgMounty.png")}
      onLayout={onLayoutRootView}
    >
      {isRegistr ? <RegistrationScreen /> : <LoginScreen />}

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
