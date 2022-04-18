/* eslint-disable no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { ParamsGet } from './types/custom';

export interface HttpGetClient {
  get(params: ParamsGet): Promise<AxiosResponse | AxiosError>;
}
