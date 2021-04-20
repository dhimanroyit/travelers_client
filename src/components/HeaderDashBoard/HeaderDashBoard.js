import React from 'react'

function HeaderDashBoard({title, avater}) {
  return (
    <header className="px-8 py-5 flex justify-between items-center bg-white">
      <h1 className="text-xl font-bold">Order List</h1>
      <p className="">Dhiman Roy</p>
    </header>
  )
}

export default HeaderDashBoard
