import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Article from "./ArticleDetails";
import { Touchable, View } from "react-native";

const Articles = () => (
  <Query
    query={gql`
      {
        articles {
          id
          title
          photoUrl
          description
          topic
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( {error}</p>;

      return data.articles.map(currentArticle => {
        return <Article article={currentArticle} />;
      });
    }}
  </Query>
);
export default Articles;
