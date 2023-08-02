/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePageInput = {
  url: string,
  title: string,
  category: string,
  wordCount: number,
  crawledAt: string,
};

export type ModelPageConditionInput = {
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  wordCount?: ModelIntInput | null,
  crawledAt?: ModelStringInput | null,
  and?: Array< ModelPageConditionInput | null > | null,
  or?: Array< ModelPageConditionInput | null > | null,
  not?: ModelPageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Page = {
  __typename: "Page",
  url: string,
  title: string,
  category: string,
  wordCount: number,
  crawledAt: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePageInput = {
  url: string,
  title?: string | null,
  category?: string | null,
  wordCount?: number | null,
  crawledAt?: string | null,
};

export type DeletePageInput = {
  url: string,
};

export type ModelPageFilterInput = {
  url?: ModelStringInput | null,
  title?: ModelStringInput | null,
  category?: ModelStringInput | null,
  wordCount?: ModelIntInput | null,
  crawledAt?: ModelStringInput | null,
  and?: Array< ModelPageFilterInput | null > | null,
  or?: Array< ModelPageFilterInput | null > | null,
  not?: ModelPageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPageConnection = {
  __typename: "ModelPageConnection",
  items:  Array<Page | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPageFilterInput = {
  url?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  wordCount?: ModelSubscriptionIntInput | null,
  crawledAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPageFilterInput | null > | null,
  or?: Array< ModelSubscriptionPageFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePageMutationVariables = {
  input: CreatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type CreatePageMutation = {
  createPage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePageMutationVariables = {
  input: UpdatePageInput,
  condition?: ModelPageConditionInput | null,
};

export type UpdatePageMutation = {
  updatePage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePageMutationVariables = {
  input: DeletePageInput,
  condition?: ModelPageConditionInput | null,
};

export type DeletePageMutation = {
  deletePage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPageQueryVariables = {
  url: string,
};

export type GetPageQuery = {
  getPage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPagesQueryVariables = {
  url?: string | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPagesQuery = {
  listPages?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      url: string,
      title: string,
      category: string,
      wordCount: number,
      crawledAt: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PagesByCategoryQueryVariables = {
  category: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PagesByCategoryQuery = {
  pagesByCategory?:  {
    __typename: "ModelPageConnection",
    items:  Array< {
      __typename: "Page",
      url: string,
      title: string,
      category: string,
      wordCount: number,
      crawledAt: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnCreatePageSubscription = {
  onCreatePage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnUpdatePageSubscription = {
  onUpdatePage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePageSubscriptionVariables = {
  filter?: ModelSubscriptionPageFilterInput | null,
};

export type OnDeletePageSubscription = {
  onDeletePage?:  {
    __typename: "Page",
    url: string,
    title: string,
    category: string,
    wordCount: number,
    crawledAt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
