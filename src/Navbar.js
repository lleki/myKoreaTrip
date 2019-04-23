import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { Box, Text } from "./styledComponents/";
import ArticleDetails from "./ArticleDetails";

// const getTopics = articles => {
//   const topics = articles.map(article => article.topic);

//   const uniqueTopics = topics.filter(function(topic, index) {
//     return topics.indexOf(topic) === index;
//   });
//   return uniqueTopics;
// };

const NAV_LINKS = ["Food", "Scenic", "Art", "Historical"];

const Navbar = () => {
  return (
    <Box flexDirection="column" p={3}>
      <Text pb={1} fontWeight="semibold" fontSize={2}>
        Filter by Topics
      </Text>

      {NAV_LINKS.map(link => (
        <TouchableOpacity onPress={() => Linking.openURL(`/${link}`)}>
          <Text>{link}</Text>
        </TouchableOpacity>
      ))}
    </Box>
  );
};
export default Navbar;
