import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';

function ServiceCard({title, days, price, image, description}) {
  return (
    <section className="shadow-lg group">
      
      <div className="h-60 overflow-hidden">
        <img 
          className="block h-full w-full object-cover group-hover:scale-125 transform transition-transform duration-500" 
          src={image} alt="" />
      </div>
      <div className="p-7">
          <h3 className="text-2xl mb-2">{title}</h3>
        <div className="flex justify-between">
          <p>{days} Days</p>
          <p>${price} / Per person</p>
        </div>
          <p className="text-sm my-4">{description}</p>
          <Link to="/user">
            <Button>Book Now</Button>
          </Link>
      </div>
    </section>
  )
}

export default ServiceCard
