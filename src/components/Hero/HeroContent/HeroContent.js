import React from 'react'
import Button from '../../Button/Button'

function HeroContent() {
  return (
    <div className="h-3/4 flex flex-wrap flex-column items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-5xl text-center text-gray-50 mb-4">World Best Travel Agency Company Since 2010</h1>
        <p className="text-center text-gray-300 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo possimus earum molestiae perspiciatis id nesciunt eum, libero ducimus at quisquam aspernatur eveniet a praesentium odit! Minima tempore fugit quibusdam vel?
        </p>

        <Button className="mx-auto block mt-5">Find Tour</Button>
      </div>
    </div>
  )
}

export default HeroContent
