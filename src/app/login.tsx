import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "@/components/ui/TextInput";

const login = () => {
  const [phone, setPhone] = useState("");

  return (
    <View>
      <View className="">
        <Image
          source={require("assets/images/splash04-desert.jpg")}
          className="w-full h-[380px]"
        />
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
            Everyone can be a chef
          </Text>
          <View>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone Number"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({});
