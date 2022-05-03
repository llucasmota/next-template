import { GetClient } from '../../../data/protocols/http/implementations/GetClient';
import { PostClient } from '../../../data/protocols/http/implementations/PostClient';
import OfferService from '../../../domain/offer/services/implementations/OfferService';
import { httpClient } from '../../../infra/AxiosHttpClient';
import HomePage from '../../../presentation/Home';

const HomePageFactory: React.FC = () => {
  const httpGetClient = new GetClient(httpClient);
  const httpPostClient = new PostClient(httpClient);

  const offerService = new OfferService(httpGetClient, httpPostClient);

  return <HomePage offerService={offerService} title="test" />;
};

export default HomePageFactory;
