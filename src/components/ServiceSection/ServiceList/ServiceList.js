import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

function ServiceList() {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-7">
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  )
}

export default ServiceList
