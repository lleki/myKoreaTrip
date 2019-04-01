import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import articles from "./articlesStore";
import { Router, Switch, Route } from "./routing";
import Home from "./Home";
import ArticleDetails from "./ArticleDetails";

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
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...props} selectArticle={this.selectArticle} />
              )}
            />
            <Route
              path="/articleDetails"
              render={props => (
                <ArticleDetails
                  {...props}
                  selectedArticle={this.state.selectedArticle}
                />
              )}
            />
          </Switch>
        </Router>
      </View>
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
