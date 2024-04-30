import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "src/styles/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRouter, router } from "expo-router";

const slides = [
  {
    key: 1,
    title: "Make Recipes your Own",
    text: "With Grigora-ke-Mikri recipe editor, you can easily edit recipes, save adjustments to ingredients, and add additional steps or tips to your preparation.",
    image: require("assets/images/splash01-breakfast.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "All in one place",
    text: "Storing your recipes in Grigora-ke_mikri allows you to quickly search, find, and select what you want to cook.",
    image: require("assets/images/splash02-lunch.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Cook from your favorite device",
    text: "Mallika stores your recipes in the Cloud so you can access them on any device through our website or Android/iOS app.",
    image: require("assets/images/splash03-dinner.jpg"),
    backgroundColor: "#22bcb5",
  },
];

const SplashScreen = () => {
  const [showApp, setShowApp] = useState(false);

  const _renderItem = ({ item }) => {
    // console.log(item);
    return (
      <View>
        <View className="">
          <Image source={item.image} className="w-full h-[380px]" />
        </View>
        <View className="z-10 h-[609px] w-full -translate-y-44 flex-col bg-slate-50 rounded-t-3xl items-center">
          <View className="mt-10">
            <View className="items-center mt-4">
              <Text className=" text-orange-600">
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={48}
                ></MaterialCommunityIcons>
              </Text>
            </View>
            <Text className="my-8 font-semibold text-2xl self-center uppercase">
              {item.title}
            </Text>
            <Text className="self-center text-lg mx-8">{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  const _onDone = () => setShowApp(true);

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: COLORS.title,
            fontWeight: "600",
            fontSize: SIZES.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  if (!showApp) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return <_renderItem item={item} />;
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowApp(true);
          router.push("login");
        }}
      />
    );
  }

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
