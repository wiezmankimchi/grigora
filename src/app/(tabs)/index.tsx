import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import PocketBase from "pocketbase";
import { getRecords } from "src/api/pb";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState([]);

  const RenderItem = (recipe) => {
    // console.log(recipe);
    const img = recipe.photo_url
      ? { uri: recipe.photo_url }
      : require("assets/images/img-placeholder.png");
    // console.log(img);
    return (
      <View className="w-44 h-72 m-2 p-2 bg-white">
        <Image source={img} className="w-36 h-44 rounded-xl" />
        <Text className="my-2 text-2xl font-semibold truncate">
          {recipe.title}
        </Text>
        <View className=" flex-row gap-1 mb-2">
          <MaterialCommunityIcons
            name="timer-outline"
            size={16}
            color="green"
          />
          <Text>{recipe.total_time}</Text>
        </View>
        {/* <View className="p-1 rounded-lg bg-blue-300 w-1/2"> */}
        <View className=" flex-row gap-1 mb-2">
          <MaterialCommunityIcons
            name="bookmark-outline"
            size={16}
            color="green"
          />
          <Text>{recipe.expand.categoryID.category}</Text>
        </View>
      </View>
    );
  };

  const getContent = () => {
    // console.log(isLoading);
    if (isLoading) {
      return <ActivityIndicator size={"large"} />;
    }

    if (error) {
      return <Text>{response[0].error}</Text>;
    } else {
      //   console.log(JSON.stringify(response));
      return (
        <View className="m-2">
          <FlatList
            data={response}
            renderItem={(record) => RenderItem(record.item)}
            numColumns={2}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }
  };

  useEffect(() => {
    getRecords(setIsLoading, setError, setResponse);
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="items-center justify-center h-full bg-slate-100">
        {getContent()}
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
