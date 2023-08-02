/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPage = /* GraphQL */ `
  query GetPage($url: String!) {
    getPage(url: $url) {
      url
      title
      category
      wordCount
      crawledAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $url: String
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPages(
      url: $url
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        url
        title
        category
        wordCount
        crawledAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const pagesByCategory = /* GraphQL */ `
  query PagesByCategory(
    $category: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pagesByCategory(
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        url
        title
        category
        wordCount
        crawledAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
