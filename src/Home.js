// src/Home.js
import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { Box, Title, Text } from "./styledComponents/";
import Navbar from "./Navbar";
import Articles from "./Articles";
const Home = props => {
  return (
    <Box flexDirection="row" bg="pale-pink">
      <Navbar />
      <Box flex={1} flexDirection="column" alignItems="center">
        <Image
          style={{ width: 500, height: 500 }}
          source={require("./images/rose-bundle.png")}
        />
        <Box flexDirection="row" justifyContent="center" flexWrap="wrap">
          <Articles />
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
{
  /* <Box position="absolute" zIndex={2}>
<Text
  color="white"
  fontWeight="semibold"
  pb={3}
  fontSize={8}
  fontFamily="Source Sans Pro"
>
  Linh Le Kim
</Text>
</Box> */
}
