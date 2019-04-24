import React, { useState } from "react";

import { Box, Text } from "./styledComponents/";
import { Image } from "react-native";

import { Router, Route, Switch } from "./routing";

import Article from "./ArticleDetails";
import Articles from "./Articles";
import Home from "./Home";
import Navbar from "./Navbar";

function App(props) {
  return (
    <Router>
      <Box flexDirection="row" bg="pale-pink">
        <Navbar />
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/articles/:topic"
              render={props => <Articles {...props} />}
            />
            <Route path="/articles/:id" component={Article} />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
