import React, {useState, useEffect} from 'react'
import ManageServiceItem from './ManageServiceItem/ManageServiceItem';
import axios from 'axios';

function ManageServices() {
  const [service, setService] = useState(null);
  useEffect(() => {
    axios.get('/services')
    .then(service => {
      const {data} = service;
      setService(data);
    })
  }, [service])
  const deleteProductHandler = (id) => {
    axios.delete(`/service/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  return (
    <section className="bg-white rounded-xl p-7 m-6">
      <div className="px-5 py-1.5 bg-gray-200 rounded-lg grid grid-cols-3">
        <h3>Service Title</h3>
        <h3>Description</h3>
        <h3>Action</h3>
      </div>
      <div className="mt-3 space-y-3">
        {service && service.map(service => (
          <ManageServiceItem 
            key={service._id}
            id={service._id}
            title={service.serviceName} 
            description={service.description} 
            deleteService={deleteProductHandler} />

        ))}
      </div>
    </section>
  )
}

export default ManageServices
