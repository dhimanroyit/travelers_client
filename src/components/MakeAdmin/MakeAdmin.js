import React from 'react'
import Button from '../Button/Button'

function MakeAdmin() {
  return (
    <section className="bg-white rounded-xl p-7 m-6 ">
      <form className="">
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="border-2 border-solid p-1.5 rounded-md block w-full" placeholder="example@gmail.com"/>
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  )
}

export default MakeAdmin
