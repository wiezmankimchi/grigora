import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Recipes",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: () => (
            <FontAwesome6 name="utensils" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          // tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          // tabBarActiveBackgroundColor: "##84CC16",

          tabBarIcon: () => (
            <FontAwesome5 name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="grocery"
        options={{
          title: "Grocery",
          // tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          // tabBarActiveBackgroundColor: "#fdba74cc",
          tabBarIcon: () => (
            <FontAwesome6 name="list-check" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          // tabBarActiveBackgroundColor: "##3B82F6",
          tabBarIcon: () => (
            <FontAwesome6 name="user" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
