import Header from './Header/Header';
// import Footer from './Footer/Footer';

export default function Page({ children }) {

  return (
    <div className={'flex items-center justify-center text-white p-10 w-full h-full'}>

      <div className={'max-w-screen-xl flex flex-col  w-full h-full'}>
        <Header/>

        <main id={'main'} className={'flex-grow w-full h-auto'}>
          {children}
        </main>

        {/*<Footer />*/}
      </div>

    </div>
  );
}
