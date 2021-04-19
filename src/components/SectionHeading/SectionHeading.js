import React from 'react'

function SectionHeading({heading, subHeading}) {
  return (
    <header className="w-2/6 mx-auto mb-8">
      <h1 className="text-center uppercase text-4xl tracking-wide font-semibold mb-4">{heading}</h1>
      <p className="text-center">{subHeading}</p>
    </header>
  )
}

export default SectionHeading
