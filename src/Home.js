// src/Home.js
import React from "react";
import { Image } from "react-native";
import { Box, Text } from "./styledComponents/";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Article from "./ArticleDetails";

const FEED_SEARCH_QUERY = gql`
  {
    articles {
      id
      title
      photoUrl
      description
      topic
    }
  }
`;

const Home = props => {
  return (
    <Box flex={1} flexDirection="column" alignItems="center">
      <Box position="absolute" zIndex={2}>
        <Text
          color="white"
          fontWeight="semibold"
          pb={3}
          fontSize={8}
          fontFamily="Source Sans Pro"
        >
          Linh Le Kim
        </Text>
      </Box>
      <Image
        style={{ width: 500, height: 500 }}
        source={require("./images/rose-bundle.png")}
      />
      <Box flexDirection="row" justifyContent="center" flexWrap="wrap">
        <Query query={FEED_SEARCH_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :( {error}</p>;
            console.log("data", data);
            return data.articles.map((currentArticle, index) => {
              return <Article key={index} article={currentArticle} />;
            });
          }}
        </Query>
      </Box>
    </Box>
  );
};
export default Home;
