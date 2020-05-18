import { API } from 'aws-amplify';
import { GrudgeType } from '../ts-types';
import { AddGrudgeResponse, DeleteGrudgeResponse } from '../ts-types/api';
import { API_NAME } from './config';

export const getGrudges = ():Promise<GrudgeType[]> => API.get(API_NAME, '/grudges', {});

export const addGrudge = (grudge: GrudgeType):Promise<AddGrudgeResponse> => API.post(API_NAME, '/grudges', {
  body: grudge,
});

export const deleteGrudge = (id: string): Promise<DeleteGrudgeResponse> => API.del(API_NAME, `/grudges/${id}`, {})

export const updateGrudge = (grudge: GrudgeType): Promise<AddGrudgeResponse> => API.put(API_NAME, `/grudges`, {
  body: grudge,
})
