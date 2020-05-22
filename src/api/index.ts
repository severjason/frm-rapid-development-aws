import { API, graphqlOperation } from 'aws-amplify';
import type { GraphQLResult } from "@aws-amplify/api/lib/types";
import { listGrudges } from '../graphql/queries';
import {
  createGrudge,
  deleteGrudge as deleteGrudgeMutation,
  updateGrudge as updateGrudgeMutation,
} from '../graphql/mutations';
import { onCreateGrudge, onDeleteGrudge, onUpdateGrudge } from '../graphql/subscriptions';
import type { Observable } from 'zen-observable-ts';
import type {
  ListGrudgesQuery,
  CreateGrudgeMutation,
  CreateGrudgeInput,
  OnCreateGrudgeSubscription,
  DeleteGrudgeMutation,
  OnDeleteGrudgeSubscription,
  OnUpdateGrudgeSubscription,
  UpdateGrudgeInput,
  UpdateGrudgeMutation,
} from '../ts-types/graphql';

export const getGrudges = () => API.graphql(graphqlOperation(listGrudges)) as Promise<GraphQLResult<ListGrudgesQuery>>;
//export const getGrudges = ():Promise<GrudgeType[]> => API.get(API_NAME, '/grudges', {});

export const addGrudge = (grudge: CreateGrudgeInput) =>
  API.graphql(graphqlOperation(createGrudge, {input: grudge})) as Promise<GraphQLResult<CreateGrudgeMutation>>;

export const newGrudgeSubscription = () =>
  API.graphql(graphqlOperation(onCreateGrudge)) as Observable<{value: GraphQLResult<OnCreateGrudgeSubscription>}>;

export const deleteGrudgeSubscription = () =>
  API.graphql(graphqlOperation(onDeleteGrudge)) as Observable<{value: GraphQLResult<OnDeleteGrudgeSubscription>}>;

export const updateGrudgeSubscription = () =>
  API.graphql(graphqlOperation(onUpdateGrudge)) as Observable<{value: GraphQLResult<OnUpdateGrudgeSubscription>}>

/*export const addGrudge = (grudge: GrudgeType):Promise<AddGrudgeResponse> => API.post(API_NAME, '/grudges', {
  body: grudge,
});*/

export const deleteGrudge = (id: string) =>
  API.graphql(graphqlOperation(deleteGrudgeMutation, {input: {id}})) as Promise<GraphQLResult<DeleteGrudgeMutation>>;

//export const deleteGrudge = (id: string): Promise<DeleteGrudgeResponse> => API.del(API_NAME, `/grudges/${id}`, {})

export const updateGrudge = (grudge: UpdateGrudgeInput) =>
  API.graphql(graphqlOperation(updateGrudgeMutation, {input: grudge})) as Promise<GraphQLResult<UpdateGrudgeMutation>>;
/*export const updateGrudge = (grudge: GrudgeType): Promise<AddGrudgeResponse> => API.put(API_NAME, `/grudges`, {
  body: grudge,
})*/
