import {StyleSheet,View,Text} from "react-native";
import React from 'react'
import {useLocalSearchParams} from "expo-router";

const Details = () => {
    const {id}=useLocalSearchParams();
    return(
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-3xl font-bold text-gray-800">Movie details:</Text>
            <Text className="text-xl mt-2 text-blue-600">{id}</Text>
        </View>
    )
}
export default Details;
const styles = StyleSheet.create({})