import React from 'react';
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from './DarkMode';

const NavLinks = [
    {
        id: 1,
        name: "Home",
        link: "#",
    },
    {
        id: 2,
        name: "Products",
        link: "/#products",
    },
    {
        id: 3,
        name: "Pricing",
        link: "/#pricing",
    },
    {
        id: 4,
        name: "Contact",
        link: "/#contact",
    },
];

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    };

  return (
    <div className='relative z-[9999] text-black dark:text-white duration-300'>
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
        {/*Logo Section*/}
            <div className='flex items-center gap-3'>
                <img 
                    src={Logo} 
                    alt="Logo"
                    className='h-16'
                />
                <p className='text-3xl'>
                    VR <span className='font-bold'>World</span>
                </p>
            </div>
        {/*Menu section*/}
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-8'>
                    { NavLinks.map(({id, name, link}) => {
                        return(
                            <li key={id} className='py-4'>
                                <a href={link} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>{name}</a>
                            </li>
                        );
                      })}
                      {/* DarkMode Feature */}
                      <DarkMode />
                </ul>
            </nav>

            {/*Mobile view sidebar*/}
            <div className='md:hidden block'>
              <div className='flex items-center gap-4'>
                <DarkMode />
                {showMenu ? (
                  <HiMenuAlt1 
                    onClick={toggleMenu} 
                    className='cursor-pointer' 
                    size={30} 
                  /> 
                ) : (
                  <HiMenuAlt3 
                    onClick={toggleMenu} 
                    className='cursor-pointer' 
                    size={30} 
                  />
                )}
              </div>
            </div>
       </div>
      </div>

      {/* ResponsiveMenu */}
           <div className={`${ showMenu ? "left-0": "-left-[100%]"} fixed bottom-0 top-0 z-10 flex h-screen w-[75%] flex-col justify-between bg-white
               px-8 pb-6 pt-12 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md dark:bg-black dark:text-white`}
           >
         {/* Nav Section*/}
        <div className='mt-4'>
          <ul className="space-y-4  text-xl">
             { NavLinks.map(({id, name, link}) => {
                  return(
                      <li key={id} className='py-4'>
                          <a href={link} className='text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500'>{name}</a>
                      </li>
                  );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
