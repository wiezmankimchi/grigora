import { useLocalSearchParams, Link } from "expo-router";

import { SafeAreaView, Text, Pressable } from "react-native";


export default function Page() {
  const { slug } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>Blog post: {slug}</Text>
      <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </SafeAreaView>
  );
}
