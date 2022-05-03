import OfferService from '../../../domain/offer/services/implementations/OfferService';
import { httpClient } from '../../../infra/AxiosHttpClient';
import { reactQueryClient } from '../../../infra/ReactQueryClient';
import HomePage from '../../../presentation/Home';

const HomePageFactory: React.FC = () => {
  const offerService = new OfferService(httpClient, reactQueryClient);

  return <HomePage offerService={offerService} title="test" />;
};

export default HomePageFactory;
