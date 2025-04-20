import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  // @ts-ignore
    // @ts-ignore
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
          <Link href="/onboarding" className="text-lg text-green-600 mt-4">Onboarding</Link>
          <Link
              href={{
                  pathname: "/movie/[id]",
                  params: { id: "avangers" },
              }}
              className="text-lg text-red-600 mt-2"
          >
              Avenger Movie
          </Link>



      </View>
  );
}
