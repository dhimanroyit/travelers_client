import React, {useState} from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form';
import Button from './../Button/Button';

function AddService() {
  const [imageURL, setImageURL] = useState(null);
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {serviceName, days, price, description} = data;
    const serviceData = {
      serviceName,
      days,
      price,
      description,
      image: imageURL
    }
    axios.post('/service', serviceData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  const imageUploadHandler = (event) => {
    const imageData = new FormData();
    imageData.set("key", "c89f3509185988917b7394dbdfa322ec");
    imageData.append("image", event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',imageData)
      .then(data => {
        const image = data.data.data.display_url
        console.log(image);
        setImageURL(image);
      }).catch(err => console.log(err))
  }

  return (
    <section className="m-6">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white rounded-xl p-7 mb-4">
          <div className="flex flex-col">
            <label className="my-2" htmlFor="service-title">Service Title</label>
            <input 
              {...register("serviceName")}
              className="border-2 rounded-md p-1.5 border-solid" 
              id="serviceName" 
              name="serviceName" 
              type="text"/>
            <label className="my-2" htmlFor="days">Days</label>
            <input 
              {...register("days")}
              className="border-2 rounded-md p-1.5 border-solid" 
              id="days" 
              name="days" 
              type="number"/>
            <label className="my-2" htmlFor="price">Price</label>
            <input 
              {...register("price")}
              className="border-2 rounded-md p-1.5 border-solid" 
              id="price" 
              name="price" 
              type="number"/>
            <label className="my-2" htmlFor="description">Description</label>
            <textarea 
              {...register("description")}
              className="border-2 rounded-md p-1.5 border-solid" 
              id="description" 
              name="description" 
              rows="4" 
              cols="50"></textarea>
            <label className="my-2" htmlFor="image">Image</label>
            <input 
              {...register("image")}
              onChange={imageUploadHandler}
              id="image"
              name="image"
              type="file"/>
            
          </div>
        </div>
        <Button>Submit</Button>
    </form>

    </section>
  )
}

export default AddService
