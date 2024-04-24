import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Quotes from './Components/Quotes/Quotes';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner/Banner2';
import Features from './Components/Features/Features';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300'>
      <Navbar/>
      <Hero />
      <Quotes />
      <Banner />
      <Banner2 />
      <Features />
    </main>
  )
}

export default App;
