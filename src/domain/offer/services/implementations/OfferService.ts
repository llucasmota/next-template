import { HttpGetClient } from '../../../../data/protocols/http/http-get-client';
import { HttpPostClient } from '../../../../data/protocols/http/http-post-client';
import { IOfferService } from '../IOfferService';

export default class OfferService implements IOfferService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private getClient: HttpGetClient,
    private postClient: HttpPostClient,
  ) {
    this.getClient = getClient;
    this.postClient = postClient;
  }

  async getOffers(): Promise<any> {
    const offersFound = await this.getClient.get({ url: '/offers' });
    return offersFound;
  }
}
