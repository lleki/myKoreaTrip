import React from "react";
import { TouchableOpacity } from "react-native";

import { Box, Text } from "./styledComponents/";

const NAV_LINKS = ["food", "scenic", "art", "historical"];

const Navbar = ({ location, history }) => {
  const handlePress = link => {
    history.push(`/articles/${link}`);
  };
  return (
    <Box flexDirection="column" p={3}>
      <Text pb={1} fontWeight="semibold" fontSize={2}>
        Filter by Topics
      </Text>
      <TouchableOpacity onPress={() => history.push("/")}>
        <Text>#All</Text>
      </TouchableOpacity>
      {NAV_LINKS.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(link)}>
          <Text>#{link}</Text>
        </TouchableOpacity>
      ))}
    </Box>
  );
};
export default Navbar;
