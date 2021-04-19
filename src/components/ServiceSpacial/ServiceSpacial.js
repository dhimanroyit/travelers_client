import React from 'react'
import Button from '../Button/Button'

function ServiceSpacial() {
  return (
    <section className="h-96 bg-service-special bg-cover bg-center bg-fixed py-20 relative">
      <div className="absolute inset-0 bg-gray-900 opacity-40 z-20"></div>
      <div className="container mx-auto h-full flex justify-center items-center   relative z-30">
        <div className="w-2/3">
          <h2 className="text-4xl font-semibold text-gray-50 text-center">Special Tour in May, Discover Thailand for 50 Customers with Discount 30%</h2>
          <Button className="mx-auto block mt-5">Details</Button>
        </div>
      </div>
    </section>
  )
}

export default ServiceSpacial
