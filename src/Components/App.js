import React from "react";
import GlobalStyles from "../Styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import Theme from "../Styles/Theme";
import Router from "./Router.js";
import {ApolloProvider} from "react-apollo-hooks"; 
import {Client} from "../Apollo/Client";

export default () => (
  <ThemeProvider theme={Theme}>
    <ApolloProvider client={Client}>
    <GlobalStyles />
    <Router isLoggerdIn={false}/>
</ApolloProvider>
  </ThemeProvider>

);

