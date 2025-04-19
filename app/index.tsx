import { Text, View } from "react-native";

export default function Index() {
  return (
    /*<View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome.</Text>
    </View>*/
      <View className="flex-1 justify-center items-center">
          <Text className="text-5xl text-blue-500">Welcome</Text>
      </View>
  );
}
