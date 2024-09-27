import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: process.env.GRAPHQL_CONTENT_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
