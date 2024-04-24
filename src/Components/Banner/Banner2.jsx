import React from 'react';
import BannerImage from "../../assets/banner2.png";
import { BiPlayCircle } from 'react-icons/bi';

const Banner2 = () => {
  return (
    <div className='py-12 sm:py-0 relative'>
       <div className='container min-h-[620px] flex items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
                {/* Banner Text section */}
                <div className='order-2 sm:order-1 space-y-5 lg:pr-20 relative'>
                  <div className='relative z-10'>
                     <h1 className='text-4xl font-semibold'>
                        GET READY TO ENJOY VR{" "}
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                            Movies WITH OUR PLATFORM
                        </span>
                     </h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nam quam ipsa similique saepe fuga porro ullam reprehenderit omnis eius?
                     </p>
                     <div className='flex gap-6'>
                        <button className='primary-btn'>
                            Get Started
                        </button>
                        <button className='flex items-center gap-2'>
                            {" "}
                            <BiPlayCircle  className='text-3xl'/>
                            See Demo
                        </button>
                     </div>
                     {/* Background Blobs */}
                     <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px]  blur-3xl opacity-50'>
                     </div>
                   </div>
                </div>

                {/* Banner Image */}
                <div className='order-1 sm:order-2'>
                    <img 
                        src={BannerImage} 
                        alt="Banner Images" 
                        className='w-full max-wx-[400px]'/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Banner2;
