import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: 134,
    title: "Get a ride",
    image: { uri: "https://links.papareact.com/3pn" },
    screen: "MapScreen",
  },
  {
    id: 135,
    title: "Order food",
    image: { uri: "https://links.papareact.com/28w" },
    screen: "EatsScreen", //change in future
  },
];

const NavOptions = () => {
  const { navigate } = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg`}
        >
          <View>
            <Image
              style={{ height: 120, width: 120, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={tw`my-2 text-lg font-semibold`}>{item.title}</Text>
            <Ionicons size={40} name="arrow-forward-circle" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
