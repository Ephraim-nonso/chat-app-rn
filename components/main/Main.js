import React from "react";
import { View } from "react-native";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Styles } from "./Styles";

const Main = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default Main;
