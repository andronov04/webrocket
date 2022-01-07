import Head from 'next/head';
import Page from '../components/Page';
import React from 'react';

const Home = () => {

  return (
    <Page>
      <Head>
        <title>Rocket</title>
        <meta property="og:title" content="Rocket"  />
        <meta name="description" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <link rel="icon" href="" />
      </Head>

      <div className={'lg:my-10 my-5 flex lg:flex-row flex-col'}>

       Hello
      </div>

    </Page>
  );
};
export default Home;
