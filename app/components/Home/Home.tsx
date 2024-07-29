import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions/HostingOptions'
import DomainSearch from './DomainSearch/DomainSearch'
import Feature from './Feature/Feature'
import Price from './Price/Price'
import Review from './Review/Review'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <HostingOptions />
      <DomainSearch />
      <Feature />
      <Price/>
      <Review/>
    </div>
  )
}

export default Home