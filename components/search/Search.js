import React from "react";
import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Styles } from "./Styles";

function Search() {
  return (
    <View>
      <View style={Styles.searchBtn}>
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder="Search" style={Styles.input} />
      </View>
    </View>
  );
}

export default Search;
