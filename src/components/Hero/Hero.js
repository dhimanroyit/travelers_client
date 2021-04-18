import React from 'react'
import hero from '../../assets/hero.mp4';
import NavBar from '../NavBar/NavBar';

function Hero() {
  return (
    <section className="h-screen relative">
      <video className="w-full h-full absolute inset-0 object-cover z-10" 
        src={hero} autoPlay muted loop></video>
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-20"></div>
      <NavBar />
    </section>
  )
}

export default Hero
