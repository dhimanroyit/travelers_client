import React from 'react'
import { Link } from 'react-router-dom'
import SideBarMenuItem from './SideBarMenuItem/SideBarMenuItem'

function SideBar({menuData}) {
  return (
    <div className="w-64 bg-gray-700 h-full fixed left-0 top-0">
      <Link to="/">
        <h2 className="py-5 mx-10 text-3xl font-bold text-white">Travelers</h2>
      </Link>
        <div className="mt-4">
          {menuData.map(menuItem => (
            <SideBarMenuItem key={menuItem.id} {...menuItem} />
          ))}
        </div>
    </div>
  )
}

export default SideBar
