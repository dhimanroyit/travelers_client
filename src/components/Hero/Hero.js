import React from 'react'
import hero from '../../assets/hero.mp4';
import NavBar from '../NavBar/NavBar';
import HeroContent from './HeroContent/HeroContent';

function Hero() {
  return (
    <section className="h-screen relative">
      <video className="w-full h-full absolute inset-0 object-cover z-10" 
        src={hero} autoPlay muted loop></video>
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-20"></div>
      <div className="container mx-auto relative z-30 h-full">
        <NavBar />
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
