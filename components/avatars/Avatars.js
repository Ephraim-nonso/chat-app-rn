import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./Styles";

function Avatars(props) {
  const { item } = props;
  return (
    <View key={item.name} style={styles.container}>
      <Image source={item.img} style={styles.image} />
      <View style={styles.msgTimeContainer}>
        <View style={styles.msgContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{ color: "#747982" }}>{item.msg}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text>{item.time}</Text>
          <View style={styles.num}>
            <Text>{item.num}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Avatars;
