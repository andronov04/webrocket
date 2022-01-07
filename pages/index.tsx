import Head from 'next/head';
import Page from '../components/Page';
import React from 'react';
import Launches from '../components/Launches/Launches';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Cyber Rocket Corp</title>
        <meta property="og:title" content="Cyber Rocket Corp"  />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <link rel="icon" href="" />
      </Head>

      <div id={'main'} className={'flex p-10 lg:flex-row flex-col min-h-screen'}>
        <div className={'h-44 w-full '}/>
        <p className={'max-w-md md:text-xl text-md'}>
          Cyber Rocket Corp is a collection of 10,000 randomly generated Penguin NFTs on the Ethereum blockchain.<br /><br />

          Our Rocket are cheeky, funny, and a little mischievious. Mostly known for eating too many fishes, racing karts and creating memes all day.
          <br /><br />
          Rocket are cheeky, funny, and a little mischievious. Mostly known for eating too many fishes.
        </p>
      </div>

      <Launches />

      <FAQ />

    </Page>
  );
};
export default Home;
