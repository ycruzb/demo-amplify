/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
