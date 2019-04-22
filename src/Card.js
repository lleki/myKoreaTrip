import React from "react";
import { Box, Title, Text } from "./styledComponents/";
import { Image, View } from "react-native";

const Card = ({ heading, content, image, boxShadow }) => {
  return (
    <Box p={3} height={400} bg="white" borderRadius={2} flexDirection="column">
      <Box alignItems="center">
        <Image
          style={{ width: 80, height: 80, borderRadius: 5 }}
          source={require(`./images/${image}`)}
        />
        <Title color="black" pb={3} fontFamily="Source Sans Pro">
          {heading}
        </Title>
      </Box>
      <Box>
        <Text color="black" fontFamily="open-sans" pt={2} pb={2}>
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;

// -webkit-box-shadow: 4px 11px 34px -27px rgba(0,0,0,0.35);
// -moz-box-shadow: 4px 11px 34px -27px rgba(0,0,0,0.35);
// box-shadow: 4px 11px 34px -27px rgba(0,0,0,0.35);
