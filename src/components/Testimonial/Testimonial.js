import React from 'react'
import SectionHeading from './../SectionHeading/SectionHeading';
import TestimonialList from './TestimonialList/TestimonialList';

function Testimonial() {
  return (
    <section className="py-20">
      <SectionHeading 
        heading="Testimonial"
        subHeading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa veritatis eligendi assumenda vol" />
      <TestimonialList />
    </section>
  )
}

export default Testimonial
