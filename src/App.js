import React, { Component } from "react";

import { Box } from "./styledComponents/";

import Home from "./Home";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <Box flexDirection="row" bg="pale-pink">
        <Navbar />
        <Home />
      </Box>
    );
  }
}

export default App;
