import React from 'react';
import BannerImg from "../../assets/banner1.png";
import { BiPlayCircle } from 'react-icons/bi';

const Banner = () => {
  return (
    <div className='py-12 sm:py-0 relative'>
        <div className="container min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                {/* Image Section*/}
                <div>
                    <img 
                        src={BannerImg} 
                        alt="Banner Images" 
                        className='w-full max-w-[400px]'
                    />
                </div>
                {/* Banner text section */}
                <div className='lg:pr-20 relative'>
                  <div className='relative z-10 space-y-5'>
                    <h1 className='text-4xl font-semibold'>
                        GET READY TO ENJOY VR{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            Movies WITH OUR PLATFORM
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic consequuntur quaerat facere numquam nihil dolorum mollitia quas consectetur minus!
                    </p>
                    <div className='flex gap-6'>
                        <button className='primary-btn'>Get Started</button>
                        <button className='flex items-center gap-2'>
                            {" "}
                            <BiPlayCircle className='text-3xl' />
                            See Demo
                        </button>
                    </div>
                    {/* Background Blobs */}
                    <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px]  blur-3xl opacity-50'>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;
