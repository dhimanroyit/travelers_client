import React from 'react'
import {useForm} from 'react-hook-form';
import Button from '../Button/Button'
import axios from 'axios'

function MakeAdmin() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {   
    
    axios.post('/admins', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
    }
  return (
    <section className="bg-white rounded-xl p-7 m-6 ">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
          {...register("adminEmail")}
           type="email" 
           id="adminEmail" 
           name="adminEmail" 
           className="border-2 border-solid p-1.5 rounded-md block w-full" 
           placeholder="example@gmail.com"/>
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  )
}

export default MakeAdmin
