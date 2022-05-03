import { HttpGetClient } from '../../../../data/protocols/http/http-get-client';
import { HttpPostClient } from '../../../../data/protocols/http/http-post-client';
import { ICheckoutService } from '../ICheckoutService';

export default class CheckoutService implements ICheckoutService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private getClient: HttpGetClient,
    private postClient: HttpPostClient,
  ) { }

  async createCart(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async getCart(): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async updateCart(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async removeCart(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
