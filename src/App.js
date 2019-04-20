import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
// import articles from "./articlesStore";
import { Router, Switch, Route } from "./routing";
import Home from "./Home";
import ArticleDetails from "./ArticleDetails";
import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponents/";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Articles from "./Articles";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  state = {
    selectedArticle: null
  };
  selectArticle = selectedArticle => {
    this.setState({
      selectedArticle
    });
  };
  render() {
    return (
      <ApolloProvider client={client}>

            <Articles />

      </ApolloProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    padding: 50
  }
});

export default App;
