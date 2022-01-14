import Head from 'next/head';
import Page from '../components/Page';
import React from 'react';
import Landing from '@/Landing';
import Rocket from '@/Rocket/Rocket';
// import Launches from '../components/Launches/Launches';
// import FAQ from '../components/FAQ/FAQ';
// import Main from '../components/Main/Main';

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Cyber Rocket Corp</title>
        <meta property="og:title" content="Cyber Rocket Corp"  />
        <meta name="description" content="NFT project on fxhash.xyz with generated collections on the tezos blockchain." />
        <meta property="og:description" content="NFT project on fxhash.xyz with generated collections on the tezos blockchain." />
        <meta property="og:image" content="https://cyberrocketcorp.com/image.png" />
        <link rel="icon" href="https://cyberrocketcorp.com/favicon.ico" />
      </Head>

      {/*<Main />*/}

      {/*<Launches />*/}

      {/*<FAQ />*/}

      <div className={'absolute overflow-scroll flex justify-center items-center  z-10 w-full h-full'}>
        <Landing />
      </div>

      {/*<Rocket />*/}

    </Page>
  );
};
export default Home;
