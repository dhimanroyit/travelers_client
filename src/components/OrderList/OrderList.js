import React from 'react'
import OrderItem from './OrderItem/OrderItem';

function OrderList() {
  const data = {
    name: 'Dhiman Roy',
    email: 'dhimanroyit@gmail.com',
    service: 'cox bazzar',
    pay: 'card',
    status: 'pending'
  }
  return (
    <section className="bg-white rounded-xl p-4 m-6 ">
      <div className="px-5 py-1.5 bg-gray-200 rounded-lg grid grid-cols-5">
        <p>Name</p>
        <p>Email ID</p>
        <p>Service</p>
        <p>Pay With</p>
        <p>Status</p>
      </div>
      <div className="space-y-2 mt-2">
        <OrderItem {...data} />
        <OrderItem {...data} />
      </div>
    </section>
  )
}

export default OrderList
