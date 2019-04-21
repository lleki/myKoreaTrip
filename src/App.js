import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Router, Switch, Route } from "./routing";
import Home from "./Home";
import ArticleDetails from "./ArticleDetails";
import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponents/";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


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
        <ThemeProvider theme={theme}>
          <View style={styles.container}>

            <Home/>

          </View>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {

    alignItems: "center",
flex: 1,

    backgroundColor: "#FDD8D3"

  }
});

export default App;
