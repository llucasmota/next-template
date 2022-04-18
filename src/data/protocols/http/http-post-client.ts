/* eslint-disable no-unused-vars */
import { AxiosError, AxiosResponse } from 'axios';
import { ParamsPost } from './types/custom';

export interface HttpPostClient {
  post(params: ParamsPost): Promise<AxiosResponse | AxiosError>;
}
