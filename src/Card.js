import React from "react";
import {  Box, Title, Text } from "./styledComponents/";
import { Image, View } from "react-native";


const Card = ({ heading, content, image }) => {

  return (
    <Box p={3} height={400} bg="white" boxShadow={2}>
    <Box flexDirection="row" flex={1}>
    <Image
        style={{ width: 80, height: 80, borderRadius: 5 }}
        source={require(`./images/${image}`)}
      />
      <Title color="black" pb={3} fontFamily='Source Sans Pro'>{heading}</Title>
      </Box>
      <Box>
        <Text color="black" fontFamily='open-sans' pt={2} pb={2}>{content}</Text>
      </Box>
    </Box>
  );
};


export default Card;
