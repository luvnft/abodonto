import { DocumentNode } from 'graphql';

const HYGRAPH_URL = process.env.GRAPHQL_CONTENT_ENDPOINT;
if (!HYGRAPH_URL) {
  throw new Error('GRAPHQL_CONTENT_ENDPOINT env var not configured');
}

const client = {
  query: async <T>(requestBody: {
    query: DocumentNode;
    variables: { [key: string]: string };
  }): Promise<{ data: T }> => {
    const body = {
      query: requestBody.query.loc?.source.body,
      variables: requestBody.variables,
    };

    const headers = {
      'content-type': 'application/json',
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    };
    const res = await fetch(HYGRAPH_URL, options);
    return await res.json();
  },
};

export default client;
