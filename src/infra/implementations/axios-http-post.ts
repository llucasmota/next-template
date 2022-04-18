/* eslint-disable class-methods-use-this */
/* eslint-disable prefer-const */
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HttpPostClient } from '../../data/protocols/http/http-post-client';
import { ParamsPost } from '../../data/protocols/http/types/custom';

export class AxiosPostRequest implements HttpPostClient {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async post(
    params: ParamsPost,
  ): Promise<AxiosResponse<any, any> | AxiosError<any, any>> {
    let postResponse: AxiosResponse | AxiosError;

    try {
      postResponse = await this.client.post(params.url, params.body);
    } catch (error) {
      postResponse = error as AxiosError;
    }
    return postResponse;
  }
}
