import React from 'react'

function OrderItem({name, email, service, pay, status}) {
  return (
    <div className="px-5 py-1.5 grid grid-cols-5 text-sm">
      <p>{name}</p>
      <p>{email}</p>
      <p>{service}</p>
      <p>{pay}</p>
      <p>{status}</p>
    </div>
  )
}

export default OrderItem
