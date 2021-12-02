import React from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { Avatar } from "../avatars/Avatar";
import Avatars from "../avatars/Avatars";
import Search from "../search/Search";
import { styles } from "./Styles";

function Body() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Search />

        <View style={styles.select}>
          <Text style={styles.innerText}> Friends</Text>
          <Text style={styles.textSelect}>Requests</Text>
          <Text style={styles.textSelect}>Archived</Text>
        </View>

        <FlatList
          data={Avatar}
          renderItem={({ item }) => <Avatars item={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
        />
      </View>
    </ScrollView>
  );
}

export default Body;
