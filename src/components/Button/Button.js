import React from 'react'

function Button({children, className, clicked}) {
  return (
    <button 
      className={`px-5 py-2 rounded text-gray-50 bg-indigo-500 ${className || ''}`}  
      onClick={clicked}>
      {children}
    </button>
  )
}

export default Button
