import React from 'react';
import HeroImg from  "../../assets/hero.png";
import { BiPlayCircle } from 'react-icons/bi';

const Hero = ({ togglePlay }) => {
  return (
    <div className='py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden'>
      <div className="container min-h-[700px] flex relative">
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center z-10 relative'>
                {/* Hero text section */}
                <div className='order-2 sm:order-1 space-y-5 lg:pr-20'>
                    <h1 className='text-4xl font-semibold'>
                        GET READY TO ENJOY VR{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            GAMES WITH OUR PLATFORM
                        </span>
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita voluptatum esse, alias fugit maiores dignissimos porro nam nemo officiis.
                    </p>
                    <div className='flex gap-6'>
                        <button className='primary-btn'>Get Started</button>
                        <button 
                          onClick={togglePlay} 
                          className='flex items-center gap-2'
                        >
                          {" "}
                          <BiPlayCircle className='text-3xl' />
                          See Demo
                        </button>
                    </div>
                </div>
                 {/* image section */}
                <div className='order-1 sm:order-2'>
                    <img 
                        src={HeroImg} 
                        alt="Hero Image" 
                        className='' 
                    />
                </div>
          </div>

          {/* Animated Blob*/}
          <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'>

          </div>

      </div>
    </div>
  )
}

export default Hero
