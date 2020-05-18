import { GrudgeType } from './index';

export type AddGrudgeResponse = {
  success: string;
  url: string;
  data?: GrudgeType;
}

export type DeleteGrudgeResponse = {
  url: string;
  data: {
    id: string;
  }
}
