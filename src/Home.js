// src/Home.js
import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import {  Box, Title, Text } from "./styledComponents/";
import Navbar from './Navbar'
import Articles from "./Articles";
const Home = props => {

  return (
    <Box flex={1} flexDirection="column" alignItems='center' >
    <Box position='absolute' zIndex={2}><Text color="white" fontWeight="semibold" pb={3} fontSize={8} fontFamily='Source Sans Pro'>Linh Le Kim</Text></Box>

    <Image
        style={{ width: 500, height: 500 }}
        source={require("./images/rose-bundle.png")}
      />
      <Box flexDirection="row" width='80%' justifyContent='center' flexWrap='wrap' ><Articles /></Box>

    </Box>
  );
};
export default Home;

