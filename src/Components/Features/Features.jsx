import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';

const FeaturesData =[
    {
        name: "Captivating Video",
        icons : (
            <FaCameraRetro  className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quae quos eos.",
        aosDelay: "0",
    },
    {
        name: "Safe Transaction",
        icons : (
            <GiNotebook  className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quae quos eos.",
        aosDelay: "500",
    },
    {
        name: "Experience Reality",
        icons : (
            <SlNote  className='text-5xl text-primary group-hover:text-black duration-300'/>
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quae quos eos.",
        aosDelay: "1000",
    },
];

const Features = () => {
  return (
    <>
      <div className="container py-14 sm:min-h-[600px]">
          <div>
            <h1 className='text-3xl font-semibold text-center sm:text-4xl mb-12'>
                Why Choose Us
            </h1>
            {/* Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {FeaturesData.map((data, index) => (
                    <div key={index} className='text-center group space-y-3 sm:space-y-6 p-4 sm:p-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_400px_#007cfff0] text-white hover:text-black rounded-lg duration-300'>
                        <div className='grid place-items-center'>{data.icons}</div>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <a href={data.link} className='inline-block font-semibold text-primary text-lg py-3 group-hover:text-black duration-300'>
                            Learn More
                        </a>
                    </div>   
                ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default Features;
