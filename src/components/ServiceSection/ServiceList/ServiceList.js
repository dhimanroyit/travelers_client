import React, {useState, useEffect} from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import axios from 'axios';

function ServiceList() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    axios.get('/services')
      .then(serviceData => {
        const {data} = serviceData;
        setServices(data);
        console.log(data);
      })
  }, [])

  return (
    <div className="container mx-auto grid grid-cols-3 gap-7">
      {services && services.map(service => {
        return <ServiceCard 
          key={service._id}
          title={service.serviceName}
          days={service.days}
          price={service.price}
          description={service.description}
          image={service.image}
        /> }
      )}
    </div>
  )
}

export default ServiceList
