import Head from 'next/head';
import React from 'react';
import logo from '../assets/rocketseat.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <img src={logo} alt="" />
        <h1>Olá cara</h1>
      </main>
    </div>
  );
};

export default Home;
