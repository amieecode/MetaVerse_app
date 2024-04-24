import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Quotes from './Components/Quotes/Quotes';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import Features from './Components/Features/Features';
import AppStore from './Components/AppStore/AppStore';
import Footer from './Components/Footer/Footer';
import PopupPlayer from './Components/PopupPlayer/PopupPlayer';

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
      <Navbar/>
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />

      {/*Video Player*/}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay}/>
    </main>
  )
}

export default App;
