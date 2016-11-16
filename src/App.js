import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from "react-apollo";

import Switch from "./Switch";

export const networkInterface = createNetworkInterface({ uri: 'https://graphql-pokemon.now.sh/' });
export const client = new ApolloClient({ networkInterface });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Switch />
      </ApolloProvider>
    );
  }
}

export default App;
