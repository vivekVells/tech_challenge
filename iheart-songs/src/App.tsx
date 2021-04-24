import React from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from 'apollo-boost'
import { ApolloProvider, useQuery} from '@apollo/react-hooks';
import config from './aws-exports'
import { GET_SONGS } from './graphql/queries';

function App() {
    /* Use useQuery hook to call GraphQL API */
    const { loading, error, data } = useQuery(GET_SONGS);
    if (loading) return <p>Loading...</p>;
    if (error) {
      console.log('error: ', error)
      return <p>Error :(</p>;
    }
    if(data) {
      console.log({data});
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;
/* Create client using the GraphQL endpoint  */
const client = new ApolloClient({
  uri: config.aws_appsync_graphqlEndpoint,
  headers: {
    'X-Api-Key': 'da2-5r7niahfkngmxlegq2cg5vixtq'
  }
});

const AppWithProvider = () => (
  <ApolloProvider client={client as any}>
    <App />
  </ApolloProvider>
);

export default AppWithProvider
