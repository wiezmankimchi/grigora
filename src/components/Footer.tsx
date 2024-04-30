import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const Footer = () => {
  return (
    <View className=" w-full h-20s bg-slate-400 items-center flex-row justify-between py-2">
      <Pressable
        className="flex-col gap-1 items-center mx-8"
        onPress={() => router.navigate("/")}
      >
        <FontAwesome6 name="utensils" size={24} color="black" />
        <Text className="text-sm">Home</Text>
      </Pressable>

      <Pressable
        className="flex-col gap-1 items-center mx-8"
        onPress={() => router.push("/explore")}
      >
        <FontAwesome5 name="search" size={24} color="black" />
        <Text className="text-sm">Explore</Text>
      </Pressable>
      <Pressable
        className="flex-col gap-1 items-center mx-8"
        onPress={() => router.push("/grocery")}
      >
        <FontAwesome6 name="list-check" size={24} color="black" />
        <Text className="text-sm">Grocery</Text>
      </Pressable>
      <Pressable
        className="flex-col gap-1 items-center mx-8"
        onPress={() => router.push("/profile")}
      >
        <FontAwesome6 name="user" size={24} color="black" />
        <Text className="text-sm">Profile</Text>
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
