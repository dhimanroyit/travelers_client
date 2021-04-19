import React from 'react';
import Footer from '../../Footer/Footer';
import Hero from '../../Hero/Hero';
import ServiceSection from '../../ServiceSection/ServiceSection';
import ServiceSpacial from '../../ServiceSpacial/ServiceSpacial';
import Testimonial from '../../Testimonial/Testimonial';

function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <ServiceSpacial />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
