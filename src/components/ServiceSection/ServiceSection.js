import React from 'react'
import SectionHeading from './../SectionHeading/SectionHeading';
import ServiceList from './ServiceList/ServiceList';

function ServiceSection() {
  return (
    <section className="py-20">
      <SectionHeading 
        heading="Service"
        subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam" />
      <ServiceList />
    </section>
  )
}

export default ServiceSection
