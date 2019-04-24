// src/Home.js
import React from "react";

import { Box } from "./styledComponents/";
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
    <Box flexDirection="row" justifyContent="center" flexWrap="wrap">
      <Query query={FEED_SEARCH_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :( {error}</p>;

          return data.articles.map((currentArticle, index) => {
            return <Article key={index} article={currentArticle} />;
          });
        }}
      </Query>
    </Box>
  );
};
export default Home;
