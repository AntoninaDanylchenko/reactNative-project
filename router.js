import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import PostsScreen from "./Screens/mainScreens/PostsScreen";
import CreateScreen from "./Screens/mainScreens/CreateScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";


  const MainStack = createStackNavigator();
  const MainTab = createBottomTabNavigator();

  const useRoute = (isAuth) => {
    if (!isAuth) {
      return (
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
        </MainStack.Navigator>
      );
    }
    return (
      <MainTab.Navigator screenOptions={() => ({
        "tabBarShowLabel": false,
        "tabBarActiveTintColor": "#FF6C00",
        "tabBarInactiveTintColor": "black",
        "tabBarStyle": [
          {
            "display": "flex",
          },
          null
        ],
        // tabBarIcon: ({ color }) => screenOptions(route, color),
      })}>
        <MainTab.Screen options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color="color" />
          ),
        }} name="Posts" component={PostsScreen} />
        <MainTab.Screen options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={size} color="color" />
          ),
        }} name="Create" component={CreateScreen} />
        <MainTab.Screen options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color="color" />
          ),
        }} name="Profile" component={ProfileScreen} />
      </MainTab.Navigator>
    );
  };

  export default useRoute;