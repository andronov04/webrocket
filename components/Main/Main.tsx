import React from 'react';
import Rocket from '../Rocket/Rocket';


const Main = () => {

  return (
    <div id={'main'} className={'relative flex md:p-10 p-4 flex-col min-h-screen'}>
      <div className={'absolute z-10'}>
        <div className={'h-32 w-full '}/>
        <div className={'max-w-md md:text-xl text-md'}>
          <h1 className={'text-4xl'}>Ad Astra! 🌠 </h1>
          <p className={'my-8'}>
            Hello future crew member,
          </p>
          <p className={''}>
            This is where your journey into the spaceverse begins. Become part of NFTs Cyber Rocket Corp now. At the beginning of the path you have to choose a rocket. We have created a unique rocket especially for you.
          </p>
          <p className={'mt-8'}>
            ---<br />Have a good flight! Your CRC.
          </p>
        </div>
      </div>
      <Rocket />
    </div>
  );
};
export default Main;
