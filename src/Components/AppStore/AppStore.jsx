import React from 'react';
import AppStoreImage from "../../assets/website/app_store.png";
import PlayStoreImage from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <>
      <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className='space-y-6 max-w-xl sx-auto'>
            <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Get Started with our app</h1>
            <p className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero reprehenderit architecto expedita iure.</p>
            <div className='flex flex-wrap justify-center gap-4 items-center'>
                <a href="#">
                    <img 
                        src={AppStoreImage} 
                        alt="App Store Image"
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                    />
                </a>
                <a href="#">
                    <img 
                        src={PlayStoreImage} 
                        alt="App Store Image"
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                    />
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default AppStore;
