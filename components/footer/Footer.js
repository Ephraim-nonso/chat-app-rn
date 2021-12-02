import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Styles } from "./Styles";

function Footer() {
  return (
    <View style={Styles.container}>
      <View style={Styles.icon}>
        <Ionicons name="chatbox-ellipses-outline" size={24} color="blue" />
        <Text style={{ color: "blue" }}>Chats</Text>
      </View>
      <View style={Styles.icon}>
        <FontAwesome name="group" size={24} color="black" />
        <Text>Groups</Text>
      </View>
      <View style={Styles.icon}>
        <Ionicons name="call-outline" size={24} color="black" />
        <Text>Calls</Text>
      </View>
      <View style={Styles.icon}>
        <Ionicons name="settings" size={24} color="black" />
        <Text>Settings</Text>
      </View>
    </View>
  );
}

export default Footer;
