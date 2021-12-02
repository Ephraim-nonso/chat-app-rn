import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Styles } from "./Styles";

const Header = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Chats</Text>
      <Feather name="menu" size={24} color="black" />
    </View>
  );
};

export default Header;
