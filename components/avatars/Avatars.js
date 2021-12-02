import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./Styles";

function Avatars(props) {
  const { item } = props;
  return (
    <View key={item.name} style={styles.container}>
      <Image source={item.img} style={styles.image} />
      <View style={styles.msgContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.msg}</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text>{item.time}</Text>
        <Text>{item.num}</Text>
      </View>
    </View>
  );
}

export default Avatars;
