import React from 'react';


const Launches = () => {

  return (
    <div id={'launches'} className={'p-10 mt-56 flex lg:flex-row flex-col min-h-screen'}>
      <div className={'h-44 w-full '}/>

      <div>
        <h1 className={'flex text-colorL items-center gap-x-2 text-4xl'}>
          <i>
            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4756 1.54072C14.1661 0.389897 15.8339 0.389895 16.5244 1.54072L29.3845 22.9742C30.0955 24.1592 29.242 25.6667 27.8601 25.6667H2.13989C0.758038 25.6667 -0.0954971 24.1592 0.615462 22.9742L13.4756 1.54072Z" fill="#00D1FF"/>
            </svg>
          </i>
          First Launch
        </h1>
        <div className={'mt-4'}>
          Cyber Rocket Corp is a collection of 22 unique generated Rockets NFTs on the January.
        </div>
      </div>

      <div className={'mt-6'}>
        <h1 className={'flex text-colorL items-center gap-x-2 text-4xl'}>
          <i>
            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4756 1.54072C14.1661 0.389897 15.8339 0.389895 16.5244 1.54072L29.3845 22.9742C30.0955 24.1592 29.242 25.6667 27.8601 25.6667H2.13989C0.758038 25.6667 -0.0954971 24.1592 0.615462 22.9742L13.4756 1.54072Z" fill="#00D1FF"/>
            </svg>
          </i>
          Future Launches
        </h1>
        <div className={'max-w-lg mt-4'}>
          Coming soon. Cyber Rocket Corp is a collection of 8,8888 randomly generated Rockets NFTs on.
        </div>
      </div>

    </div>
  );
};
export default Launches;
