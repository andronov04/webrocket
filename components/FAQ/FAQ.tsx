import React from 'react';


const FAQ = () => {

  const list = [
    {
      title: 'What makes this project special?',
      desc: 'This is a full-blown universe where each participant can become a part of an exciting space flight and enter their name in the story.',
    },
    {
      title: 'What are the rocket specs?',
      desc: 'Each Rocket has a unique set of traits and unlocks varying, unique levels of access and perks for its owner.',
    },
    {
      title: 'What are the future plans?',
      desc: 'Implementation of ideas. Work on the spaceverse. Making a NFT game. Personal account.',
    },
  ];

  return (
    <div id={'faq'} className={'md:p-10 p-4 gap-y-10 flex flex-col min-h-screen'}>
      <div className={'h-28 w-full '}/>
      {list.map(l =>
        <div key={l.title}>
          <h2 className={'md:text-4xl text-md font-bold'}>{l.title}</h2>
          <div className={'text-base'}>
            <p>
              {l.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default FAQ;
