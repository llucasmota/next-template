/* eslint-disable no-unused-vars */
import { Container } from '@develop-fapp/ui-kit-fapp';
import React from 'react';
import HomePageHeader from './components/header';
import { IOfferService } from '../../domain/offer/services/IOfferService';

interface HomePageProps {
  offerService: IOfferService;
  title: string;
}

const HomePage = ({ offerService, title }: HomePageProps): JSX.Element => {
  return (
    <Container container="fluid">
      <HomePageHeader />
    </Container>
  );
};

export default HomePage;
