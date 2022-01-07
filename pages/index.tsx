import Head from 'next/head';
import Page from '../components/Page';
import React from 'react';
import Launches from '../components/Launches/Launches';
import FAQ from '../components/FAQ/FAQ';
import Main from '../components/Main/Main';

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Cyber Rocket Corp</title>
        <meta property="og:title" content="Cyber Rocket Corp"  />
        <meta name="description" content="Cyber Rocket Corp is a collection of 10,000 generated Rocket NFTs on the Ethereum blockchain.
Each Rocket has a unique set of traits and unlocks varying, unique levels of access and perks for its owner." />
        <meta property="og:description" content="Cyber Rocket Corp is a collection of 10,000 generated Rocket NFTs on the Ethereum blockchain.
Each Rocket has a unique set of traits and unlocks varying, unique levels of access and perks for its owner." />
        <meta property="og:image" content="" />
        <link rel="icon" href="" />
      </Head>

      <Main />

      <Launches />

      <FAQ />

    </Page>
  );
};
export default Home;
