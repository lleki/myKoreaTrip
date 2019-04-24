import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { Router } from "./routing";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { ThemeProvider } from "styled-components";
import { theme } from "./styledComponents/";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDom.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </ApolloProvider>,

  document.getElementById("root")
);
