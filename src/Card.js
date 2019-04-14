import React from "react";
import { Box, Title, Subtitle, Text } from "./styledComponents/";

const Card = ({ heading, content }) => {
  return (
    <Box p={3} bg="light-gray" width={500} height={400}>
      <Title color="#d83636">{heading}</Title>
      <Box>
        <Text color="f27999">{content}</Text>
      </Box>
    </Box>
  );
};
export default Card;
