/* eslint-disable no-unused-vars */
import { Container } from '@develop-fapp/ui-kit-fapp';
import React from 'react';
import HomePageHeader from './components/header';
import { OfferServiceSkeleton } from '../../domain/offer/services/OfferServiceSkeleton';

interface HomePageProps {
  offerService: OfferServiceSkeleton;
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
