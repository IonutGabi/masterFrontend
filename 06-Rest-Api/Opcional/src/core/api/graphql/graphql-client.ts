import { GraphQLClient } from 'graphql-request';

const url = `${process.env.RICK_AND_MORTY_GRAPHQL_API}`;

export const graphqlClient = new GraphQLClient(url);
