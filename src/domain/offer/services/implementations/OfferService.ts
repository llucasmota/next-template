import { AxiosInstance } from 'axios';
import { QueryClient } from 'react-query';

import { Offers } from '../../models/offer';

import { OfferServiceSkeleton } from '../OfferServiceSkeleton';

export default class OfferService implements OfferServiceSkeleton {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private httpClient: AxiosInstance,
    private reactQueryClient: QueryClient,
  ) {
    this.httpClient = httpClient;
    this.reactQueryClient = reactQueryClient;
  }

  async getOffers(): Promise<Offers | Error> {
    try {
      const { data: offers } = await this.httpClient.get<Offers>('/');
      return offers;
    } catch (err) {
      throw new Error('Mensagem de error');
    }
  }
}
