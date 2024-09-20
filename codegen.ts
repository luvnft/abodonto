import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://sa-east-1.cdn.hygraph.com/content/cm0zp4v7r00k907w20tztysuh/master',
  documents: 'queries/*.graphql',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
