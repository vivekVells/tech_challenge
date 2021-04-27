import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import config from "./aws-exports";

// Create client using the GraphQL endpoint
const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  headers: {
    "X-Api-Key": "da2-5r7niahfkngmxlegq2cg5vixtq",
  },
});

const AppWithProvider = () => (
  <ApolloProvider client={client as any}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>,
  document.getElementById("root")
);
