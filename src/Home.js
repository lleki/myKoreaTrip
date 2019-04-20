// src/Home.js
import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import {  Box } from "./styledComponents/";
import Navbar from './Navbar'
import Articles from "./Articles";
const Home = props => {

  return (
    <Box flex={1} >
    <Image
        style={{ width: 500, height: 500 }}
        source={require("./images/rose-bundle.png")}
      />
      <Articles />
    </Box>
  );
};
export default Home;

