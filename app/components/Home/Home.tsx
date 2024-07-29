import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions/HostingOptions'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <HostingOptions/>
    </div>
  )
}

export default Home