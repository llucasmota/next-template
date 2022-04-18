/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HttpGetClient } from '../../data/protocols/http/http-get-client';
import { ParamsGet } from '../../data/protocols/http/types/custom';

export class AxiosPostRequest implements HttpGetClient {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async get(
    params: ParamsGet,
  ): Promise<AxiosResponse<any, any> | AxiosError<any, any>> {
    let getResponse: AxiosResponse | AxiosError;

    try {
      getResponse = await this.client.get(params.url);
    } catch (error) {
      getResponse = error as AxiosError;
    }
    return getResponse;
  }
}
