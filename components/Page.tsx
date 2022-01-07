import Header from './Header/Header';
import Menu from './Menu/Menu';
// import Footer from './Footer/Footer';

export default function Page({ children }) {

  //p-10
  return (
    <div className={'flex items-center justify-center text-white w-full h-full'}>

      <Menu />
      <Header/>

      <div className={'flex flex-col  w-full h-full'}>

        <main className={'flex-grow w-full h-auto'}>
          {children}
        </main>

        {/*<Footer />*/}
      </div>

    </div>
  );
}
