import React, { useState } from "react";

import { Box } from "./styledComponents/";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Article from "./ArticleDetails";
import Articles from "./Articles";
import Home from "./Home";
import Navbar from "./Navbar";

function App(props) {
  const [topic, setTopic] = useState(null);

  const updateTopic = topic => {
    console.log("updated topic", topic);
    setTopic(topic);
  };
  return (
    <BrowserRouter>
      <Box flexDirection="row" bg="pale-pink">
        <Navbar updateTopic={updateTopic} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/articles/:topic"
            render={props => <Articles {...props} topic={topic} />}
          />
          <Route path="/articles/:id" component={Article} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
