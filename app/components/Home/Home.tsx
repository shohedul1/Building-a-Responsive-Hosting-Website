import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions/HostingOptions'
import DomainSearch from './DomainSearch/DomainSearch'
import Feature from './Feature/Feature'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <HostingOptions />
      <DomainSearch />
      <Feature />
    </div>
  )
}

export default Home