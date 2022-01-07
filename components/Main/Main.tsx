import React from 'react';
import Rocket from '../Rocket/Rocket';


const Main = () => {

  return (
    <div id={'main'} className={'relative flex md:p-10 p-4 flex-col min-h-screen'}>
      <div className={'absolute z-10'}>
        <div className={'h-44 w-full '}/>
        <div>
          <h1 className={'text-4xl'}>Ad Astra! 🌠 </h1>
          <p className={'max-w-md md:text-xl text-md'}>
            Cyber Rocket Corp is a collection of <b>10,000</b> generated <b>Rocket NFTs</b> on the Ethereum blockchain.
            <br /><br />
            Each Rocket has a unique set of traits and unlocks varying, unique levels of access and perks for its owner.
            {/*<br /><br />*/}
            {/*Each Rocket has a 3D version.You will be able to run it in the AR*.*/}
          </p>
        </div>
      </div>
      <Rocket />
    </div>
  );
};
export default Main;
