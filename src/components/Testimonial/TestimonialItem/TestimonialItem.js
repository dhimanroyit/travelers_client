import React from 'react'
import img from '../../../assets/testimonial.jpg';

function TestimonialItem() {
  return (
    <section className="px-16 pb-16 pt-20 mt-24 shadow-2xl rounded-xl relative">
      <div className="h-32 w-32 rounded-full overflow-hidden absolute left-2/4 -top-2/4 transform -translate-x-2/4 translate-y-2/4">
        <img className="w-full" src={img} alt=""/>
      </div>
      <div className="text-center mt-2">
        <h2 className="text-2xl mb-1.5">Dhiman Roy</h2>
        <h3 className="text-base mb-3">Front End Developer</h3>
        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae nobis ab, fuga qui odio consectetur amet dolor iste optio tempora hic </p>
      </div>
    </section>
  )
}

export default TestimonialItem
