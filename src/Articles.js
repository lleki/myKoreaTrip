import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Article from "./ArticleDetails";

const FEED_SEARCH_QUERY = gql`
  query ArticlesByTopic($topic: String) {
    articles(topic: $topic) {
      id
      title
      photoUrl
      description
      topic
    }
  }
`;

const Articles = ({ history, match }) => (
  <Query query={FEED_SEARCH_QUERY} variables={{ topic: match.params.topic }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( {error}</p>;

      return data.articles.map((currentArticle, index) => {
        return <Article key={index} article={currentArticle} />;
      });
    }}
  </Query>
);
export default Articles;
