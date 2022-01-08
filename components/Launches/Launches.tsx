import React from 'react';


const Launches = () => {

  const launches = [
    {
      key: 'first',
      title: 'First Launch (January 2022)',
      desc: 'Be first. A Collection of 22 unique generated rockets.',
    },
    {
      key: 'next',
      title: 'Next Launch (Q1 2022)',
      desc: 'More choices, more emotions. Complete collection of 10,000 rockets.',
    },
    {
      key: 'special',
      title: 'Special Launch (2022)',
      desc: 'Starships collection.',
    },
    {
      key: 'future',
      title: 'Future Launches (2022)',
      desc: 'Everything around spaceverse. Satellites, missions, expedition patches, avatars, and more.',
    },
  ];

  return (
    <div id={'launches'} className={'md:p-10 p-4 mt-56 gap-y-10  flex flex-col min-h-screen'}>
      <div className={'h-28 w-full'}/>

      {launches.map(l =>
        <div key={l.key}>
          <h1 className={`flex ${l.key === 'future' ? 'text-colorF' : ''} ${l.key === 'special' ? 'text-colorS' : ''} text-colorL items-center gap-x-2 md:text-4xl text-md`}>
            <i>
              {l.key === 'first' && <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4756 1.54072C14.1661 0.389897 15.8339 0.389895 16.5244 1.54072L29.3845 22.9742C30.0955 24.1592 29.242 25.6667 27.8601 25.6667H2.13989C0.758038 25.6667 -0.0954971 24.1592 0.615462 22.9742L13.4756 1.54072Z" fill="#00D1FF"/>
              </svg>}
              {l.key === 'next' && <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4756 1.54072C14.1661 0.389897 15.8339 0.389895 16.5244 1.54072L29.3845 22.9742C30.0955 24.1592 29.242 25.6667 27.8601 25.6667H2.13989C0.758038 25.6667 -0.0954971 24.1592 0.615462 22.9742L13.4756 1.54072Z" fill="#00D1FF"/>
              </svg>}
              {l.key === 'special' && <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9187 28.738C17.2007 30.0695 14.7993 30.0695 13.0813 28.738L2.6421 20.6476C1.05635 19.4187 0.410295 17.3281 1.02621 15.4188L4.93486 3.30193C5.56972 1.33387 7.40156 0 9.46947 0L22.5305 0C24.5984 0 26.4303 1.33388 27.0651 3.30193L30.9738 15.4188C31.5897 17.3281 30.9436 19.4187 29.3579 20.6476L18.9187 28.738Z" fill="#F67E0E"/>
              </svg>
              }
              {l.key === 'future' && <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9187 28.738C17.2007 30.0695 14.7993 30.0695 13.0813 28.738L2.6421 20.6476C1.05635 19.4187 0.410295 17.3281 1.02621 15.4188L4.93486 3.30193C5.56972 1.33387 7.40156 0 9.46947 0L22.5305 0C24.5984 0 26.4303 1.33388 27.0651 3.30193L30.9738 15.4188C31.5897 17.3281 30.9436 19.4187 29.3579 20.6476L18.9187 28.738Z" fill="#FF0000"/>
              </svg>
              }
            </i>
            {l.title}
          </h1>
          <div className={'mt-4 md:text-base text-sm'}>
            {l.desc.split('\n').map(text =>
              <p key={text}>
                {text}
                <br />
              </p>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
export default Launches;
