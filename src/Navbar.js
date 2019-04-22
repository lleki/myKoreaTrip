import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { Box, Text } from "./styledComponents/";
import { Router, Switch, Route } from "./routing";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getTopics = articles => {
  const topics = articles.map(article => article.topic);
  const uniqueTopics = topics.filter(function(topic, index) {
    return topics.indexOf(topic) == index;
  });
  return uniqueTopics;
};
const FEED_QUERY = gql`
  {
    articles {
      topic
    }
  }
`;
const Navbar = () => {
  return (
    <Box flexDirection="column" p={3}>
      <Text pb={1} fontWeight="semibold" fontSize={2}>
        Filter by Topics
      </Text>
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :( {error}</p>;
          const links = getTopics(data.articles);
          return links.map(link => {
            return (
              <TouchableOpacity
                onPress={() => Linking.openURL("http://google.com")}
              >
                <Text>{link}</Text>
              </TouchableOpacity>
            );
          });
        }}
      </Query>
    </Box>
  );
};
export default Navbar;
