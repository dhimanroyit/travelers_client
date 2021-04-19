import React from 'react'
import TestimonialItem from '../TestimonialItem/TestimonialItem'

function TestimonialList() {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-8">
      <TestimonialItem />
      <TestimonialItem />
    </div>
  )
}

export default TestimonialList
