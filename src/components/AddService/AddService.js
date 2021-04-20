import React from 'react'
import Button from './../Button/Button';

function AddService() {
  return (
    <section className="m-6">
      <form action="">
        <div className="bg-white rounded-xl p-4 mb-4">
          <div className="flex flex-col">
            <label className="my-2" htmlFor="service-title">Service Title</label>
            <input className="border-2 rounded-md p-1.5 border-solid border-gray-500" id="service-title" name="service-title" type="text"/>
            <label className="my-2" htmlFor="service-title">Description</label>
            <textarea className="border-2 rounded-md p-1.5 border-solid border-gray-500" id="service-title" name="service-title" rows="4" cols="50"></textarea>
            <label className="my-2" htmlFor="image">Image</label>
            <input type="file"/>
            
          </div>
        </div>
        <Button className="">Submit</Button>
    </form>
    </section>
  )
}

export default AddService
