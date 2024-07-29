'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../Helper/Button';
import { IoMenuSharp } from "react-icons/io5";


const LinkNav = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Hosting', href: '#' },
  { name: 'Domain', href: '#' },
  { name: 'Help Center', href: '#' }
];

type Props ={
  openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${navSticky ? 'bg-blue-950' : 'bg-blue-600'} sticky top-0 z-30 transition-all duration-200`}>
      <div className='flex items-center h-[10vh] lg:h-[12vh] justify-between w-4/5 mx-auto'>
        {/* Logo */}
        <div className='font-bold text-white text-2xl'>
          <span className='text-3xl md:text-4xl font-bold text-yellow-300'>W</span>
          Host
        </div>

        {/* Navigation Links for Desktop */}
        <ul className='lg:flex hidden items-center space-x-10 lg:space-x-12 xl:space-x-14'>
          {LinkNav.map((item, index) => (
            <li key={index}>
              <Link className='nav_link' href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button but gura*/}
        <div className='flex space-x-6 items-center'>
          <Button bg='bg-orange-500'>Login</Button>
          <IoMenuSharp onClick={openNav} className='w-8 h-8 md:w-[2.3rem] md:h-10 lg:hidden text-white rotate-180' />
        </div>
      </div>
    </div>
  );
};

export default Nav;
