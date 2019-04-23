import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Article from "./ArticleDetails";
import { Touchable, View } from "react-native";

const FEED_SEARCH_QUERY = gql`
  query ArticlesByTopic($topic: String!) {
    articlesByTopic(topic: $topic) {
      id
      title
      photoUrl
      description
      topic
    }
  }
`;

const Articles = ({ topic }) => (
  <Query query={FEED_SEARCH_QUERY} variables={{ topic }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( {error}</p>;
      console.log("data", data);
      return data.articles.map((currentArticle, index) => {
        return <Article key={index} article={currentArticle} />;
      });
    }}
  </Query>
);
export default Articles;
