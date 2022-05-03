import Head from 'next/head';
import React from 'react';
import HomePageFactory from '../main/factories/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomePageFactory />
    </>
  );
};

export default Home;
