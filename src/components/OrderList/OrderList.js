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
    <section className="bg-white rounded-xl p-7 m-6 ">
      <div className="px-5 py-1.5 bg-gray-200 rounded-lg grid grid-cols-5">
        <div>Name</div>
        <div>Email ID</div>
        <div>Service</div>
        <div>Pay With</div>
        <div>Status</div>
      </div>
      <div className="space-y-2 mt-2">
        <OrderItem {...data} />
        <OrderItem {...data} />
      </div>
    </section>
  )
}

export default OrderList
