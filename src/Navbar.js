import React from "react";
import { TouchableOpacity } from "react-native";

import { Box, Text } from "./styledComponents/";

// const getTopics = articles => {
//   const topics = articles.map(article => article.topic);

//   const uniqueTopics = topics.filter(function(topic, index) {
//     return topics.indexOf(topic) === index;
//   });
//   return uniqueTopics;
// };

const NAV_LINKS = ["food", "scenic", "art", "historical"];

const Navbar = ({ location, history }) => {
  console.log("history", history);
  console.log("location ", location);
  const handlePress = link => {
    history.push(`/articles/${link}`);
  };
  return (
    <Box flexDirection="column" p={3}>
      <Text pb={1} fontWeight="semibold" fontSize={2}>
        Filter by Topics
      </Text>

      {NAV_LINKS.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(link)}>
          <Text>{link}</Text>
        </TouchableOpacity>
      ))}
    </Box>
  );
};
export default Navbar;
