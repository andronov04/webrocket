import React from 'react';


const Launches = () => {

  const launches = [
    {
      title: 'First Launch (January 2022)',
      desc: 'Cyber Rocket Corp is a collection of 22 unique generated Rocket NFTs on the January.',
    },
    {
      title: 'Second Launch (Q1 2022)',
      desc: 'Launching a complete collection of 10,000 Rocket NFTs.\nPersonal account, where you can view your rockets in 3D. Learn the rocket\'s specifications.',
    },
    {
      title: 'Third Launch (Q2 2022)',
      desc: 'Launch NFT collection of Starships.',
    },
    {
      title: 'Fourth Launch (Q3 2022)',
      desc: 'Launch NFT collection of Space Crew.',
    },
    {
      title: 'Future Launches',
      desc: 'Launch NFT game - “Faraway Galaxies”.',
    },
  ];

  return (
    <div id={'launches'} className={'md:p-10 p-4 mt-56 gap-y-6  flex flex-col min-h-screen'}>
      <div className={'h-44 w-full'}/>

      {launches.map(l =>
        <div key={l.title}>
          <h1 className={'flex text-colorL items-center gap-x-2 md:text-4xl text-md'}>
            <i>
              <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4756 1.54072C14.1661 0.389897 15.8339 0.389895 16.5244 1.54072L29.3845 22.9742C30.0955 24.1592 29.242 25.6667 27.8601 25.6667H2.13989C0.758038 25.6667 -0.0954971 24.1592 0.615462 22.9742L13.4756 1.54072Z" fill="#00D1FF"/>
              </svg>
            </i>
            {l.title}
          </h1>
          <div className={'mt-4 md:text-base text-sm'}>
            {l.desc.split('\n').map(text =>
              <>
                {text}
                <br />
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
export default Launches;
