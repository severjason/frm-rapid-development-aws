/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fetchGrudges = /* GraphQL */ `
  query FetchGrudges {
    fetchGrudges {
      id
      person
      deed
      avenged
    }
  }
`;
export const getGrudge = /* GraphQL */ `
  query GetGrudge($id: ID!) {
    getGrudge(id: $id) {
      id
      person
      deed
      avenged
    }
  }
`;
export const listGrudges = /* GraphQL */ `
  query ListGrudges(
    $filter: TableGrudgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrudges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        person
        deed
        avenged
      }
      nextToken
    }
  }
`;
