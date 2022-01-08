import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useStateRef from '../../lib/rnusestate';


const Menu = () => {
  const [hash, setHash, refHash] = useStateRef('hash') || 'main';
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    setRender(true);
  }, []);

  useEffect(() => {
    render && ['main', 'launches', 'faq'].forEach(id => {
      const intersectionObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          const id = entries[0].target.id.replace('#', '');
          if (refHash.current !== id) {
            setHash(id);
          }
        }
      }, { threshold: 0.6 });
      const el = document.querySelector(`#${id}`);
      if (el) {
        intersectionObserver.observe(el);
      }
    });
  }, [render]);

  return (
    <div style={{
      marginTop: '-50px',
    }} className={'fixed z-10 top-1/2 md:right-10 right-4 w-16 '}>
      <nav>
        <ul className={'flex flex-col gap-y-4 md:text-3xl text-xl items-end justify-center lg:gap-x-5 gap-x-2'}>
          <li className={'cursor-pointer hover:opacity-80'}>
            <Link href={'/#main'}>
              <a href={'/#main'} className={`flex ${hash === 'main' ? 'text-colorG': ''}  items-center gap-x-2`}>
                <div>Story</div>
                <i className={`${hash === 'main' ? 'block': 'invisible'}`}>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21554 8.69459C0.678088 8.38748 0.678089 7.61252 1.21554 7.30541L12.8031 0.683949C13.3364 0.379192 14 0.764286 14 1.37854L14 14.6215C14 15.2357 13.3364 15.6208 12.8031 15.3161L1.21554 8.69459Z" fill="#B6FF59"/>
                  </svg>
                </i>
              </a>
            </Link>
          </li>
          <li className={'cursor-pointer hover:opacity-80'}>
            <Link href={'/#launches'}>
              <a href={'/#launches'} className={`flex ${hash === 'launches' ? 'text-colorL': ''} items-center gap-x-2`}>
                <div>Roadmap</div>
                <i className={`${hash === 'launches' ? 'block': 'invisible'}`}>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.21554 8.69459C0.678088 8.38748 0.678089 7.61252 1.21554 7.30541L12.8031 0.683949C13.3364 0.379192 14 0.764286 14 1.37854L14 14.6215C14 15.2357 13.3364 15.6208 12.8031 15.3161L1.21554 8.69459Z" fill="#00D1FF"/>
                  </svg>
                </i>
              </a>
            </Link>
          </li>
          <li className={'cursor-pointer hover:opacity-80'}>
            <Link href={'/#faq'}>
              <a href={'/#faq'} className={'flex items-center gap-x-2'}>
                <div>FAQ</div>
                <i className={`${hash === 'faq' ? 'block': 'invisible'}`}>
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
