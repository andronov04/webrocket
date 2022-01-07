import Link from 'next/link';
import React from 'react';


const Menu = () => {

  return (
    <div style={{
      marginTop: '-50px',
    }} className={'fixed z-10 top-1/2 right-10 w-16 '}>
      <nav>
        <ul className={'flex flex-col gap-y-4 md:text-3xl text-xl items-end justify-center lg:gap-x-5 gap-x-2'}>
          <li className={'cursor-pointer hover:opacity-80'}>
            <Link href={'/#main'}>
              <a href={'/#main'} style={{
                color: '#B6FF59',
              }} className={'flex items-center gap-x-2'}>
                <div>Story</div>
                <i>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21554 8.69459C0.678088 8.38748 0.678089 7.61252 1.21554 7.30541L12.8031 0.683949C13.3364 0.379192 14 0.764286 14 1.37854L14 14.6215C14 15.2357 13.3364 15.6208 12.8031 15.3161L1.21554 8.69459Z" fill="#B6FF59"/>
                  </svg>
                </i>
              </a>
            </Link>
          </li>
          <li className={'cursor-pointer hover:opacity-80'}>
            <Link href={'/#launches'}>
              <a href={'/#launches'} style={{
                color: '#00D1FF',
              }} className={'flex items-center gap-x-2'}>
                <div>Launches</div>
                <i>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21554 8.69459C0.678088 8.38748 0.678089 7.61252 1.21554 7.30541L12.8031 0.683949C13.3364 0.379192 14 0.764286 14 1.37854L14 14.6215C14 15.2357 13.3364 15.6208 12.8031 15.3161L1.21554 8.69459Z" fill="#00D1FF"/>
                  </svg>
                </i>
              </a>
            </Link>
          </li>
          <li className={'cursor-pointer hover:opacity-80'}>
            <Link href={'/#faq'}>
              <a href={'/#faq'} style={{
                color: '#FFFFFF',
              }} className={'flex items-center gap-x-2'}>
                <div>FAQ</div>
                <i>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21554 8.69459C0.678088 8.38748 0.678089 7.61252 1.21554 7.30541L12.8031 0.683949C13.3364 0.379192 14 0.764286 14 1.37854L14 14.6215C14 15.2357 13.3364 15.6208 12.8031 15.3161L1.21554 8.69459Z" fill="#FFFFFF"/>
                  </svg>
                </i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
