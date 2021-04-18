import React from 'react'
import hero from '../../assets/hero.mp4';

function Hero() {
  return (
    <section className="h-screen relative">
      <video className="w-full h-full absolute inset-0 object-cover" 
        src={hero} autoPlay muted loop></video>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
    </section>
  )
}

export default Hero
