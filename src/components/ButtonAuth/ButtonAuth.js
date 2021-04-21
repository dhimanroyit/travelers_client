import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonAuth({icon, children, clicked}) {
  return (
    <button 
      onClick={clicked}
      className="px-14 py-2 relative border-solid border rounded-full">
      <span className="absolute left-1.5 top-1/2 transform -translate-y-1/2 text-xl">
        <FontAwesomeIcon icon={icon} />
      </span>
      {children}
    </button>
  )
}

export default ButtonAuth
