import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideBarMenuItem({path, title, icon}) {
  return (
      <Link className="px-10 py-2 block text-white text-sm hover:bg-gray-600 transition-colors duration-100" to={path}>
        <span className="mr-2 text-xs"><FontAwesomeIcon icon={icon} /></span>
        {title}
      </Link>
  )
}

export default SideBarMenuItem
