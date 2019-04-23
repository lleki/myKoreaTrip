import React from "react";
import ReactDom from "react-dom";
import App from "./App";

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
      <App />
    </ThemeProvider>
  </ApolloProvider>,

  document.getElementById("root")
);
