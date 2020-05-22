import { GrudgeType } from './index';

export type CreateGrudgeInput = {
  person: string,
  deed: string,
  avenged: boolean,
};

export type UpdateGrudgeInput = {
  id: string,
  person?: string | null,
  deed?: string | null,
  avenged?: boolean | null,
};

export type DeleteGrudgeInput = {
  id: string,
};

export type TableGrudgeFilterInput = {
  id?: TableIDFilterInput | null,
  person?: TableStringFilterInput | null,
  deed?: TableStringFilterInput | null,
  avenged?: TableBooleanFilterInput | null,
};

export type TableIDFilterInput = {
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
};

export type TableStringFilterInput = {
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
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateGrudgeMutationVariables = {
  input: CreateGrudgeInput,
};

export type CreateGrudgeMutation = {
  createGrudge:  GrudgeType | null,
};

export type UpdateGrudgeMutationVariables = {
  input: UpdateGrudgeInput,
};

export type UpdateGrudgeMutation = {
  updateGrudge:  {
    __typename: "Grudge",
    id: string,
    person: string,
    deed: string,
    avenged: boolean,
  } | null,
};

export type DeleteGrudgeMutationVariables = {
  input: DeleteGrudgeInput,
};

export type DeleteGrudgeMutation = {
  deleteGrudge:  GrudgeType | null,
};

export type FetchGrudgesQuery = {
  fetchGrudges:  GrudgeType[] | null,
};

export type GetGrudgeQueryVariables = {
  id: string,
};

export type GetGrudgeQuery = {
  getGrudge:  {
    __typename: "Grudge",
    id: string,
    person: string,
    deed: string,
    avenged: boolean,
  } | null,
};

export type ListGrudgesQueryVariables = {
  filter?: TableGrudgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGrudgesQuery = {
  listGrudges:  {
    __typename: "GrudgeConnection",
    items:  GrudgeType[] | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGrudgeSubscriptionVariables = {
  id?: string | null,
  person?: string | null,
  deed?: string | null,
  avenged?: boolean | null,
};

export type OnCreateGrudgeSubscription = {
  onCreateGrudge:  GrudgeType | null,
};

export type OnUpdateGrudgeSubscriptionVariables = {
  id?: string | null,
  person?: string | null,
  deed?: string | null,
  avenged?: boolean | null,
};

export type OnUpdateGrudgeSubscription = {
  onUpdateGrudge:  {
    __typename: "Grudge",
    id: string,
    person: string,
    deed: string,
    avenged: boolean,
  } | null,
};

export type OnDeleteGrudgeSubscriptionVariables = {
  id?: string | null,
  person?: string | null,
  deed?: string | null,
  avenged?: boolean | null,
};

export type OnDeleteGrudgeSubscription = {
  onDeleteGrudge:  GrudgeType | null,
};
