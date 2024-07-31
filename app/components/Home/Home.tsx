'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions/HostingOptions'
import DomainSearch from './DomainSearch/DomainSearch'
import Feature from './Feature/Feature'
import Price from './Price/Price'
import Review from './Review/Review'
import Blog from './Blog/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos")
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: "top-bottom"

      });
    }
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <HostingOptions />
      <DomainSearch />
      <Feature />
      <Price />
      <Review />
      <Blog />
    </div>
  )
}

export default Home