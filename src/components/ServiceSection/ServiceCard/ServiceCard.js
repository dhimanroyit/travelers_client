import React from 'react'
import Button from '../../Button/Button'

function ServiceCard() {
  return (
    <section className="shadow-lg group">
      
      <div className="h-60 overflow-hidden">
        <img 
          className="block h-full w-full object-cover group-hover:scale-125 transform transition-transform duration-500" 
          src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="p-7">
          <h3 className="text-2xl mb-2">Coxes Bazaar</h3>
        <div className="flex justify-between">
          <p>5 Days</p>
          <p>$5000 / Per person</p>
        </div>
          <p className="text-sm my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem velit ipsa magnam modi.</p>
          <Button>Book Now</Button>
      </div>
    </section>
  )
}

export default ServiceCard
