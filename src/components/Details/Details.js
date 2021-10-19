import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} =useParams();
    const[service,setService]= useState() ;
 
   useEffect(() => {
        fetch("../../nova.json")
          .then((res) => res.json())
          .then((result) => setService(result));
      }, []);
   console.log(service)
   const selected = service ? service.filter(s => s.id == serviceId):[];
   console.log(selected);
    return (
       <>
       {selected.map(service => (
           <div className="container mt-5 mb-5">
            <div className="row col-md-6 d-flex justify-content-center">
            <div class="card w-50% h-50%">
            <img src={service.img} class="card-img-top" alt="..." />
            <h2>{service.name}</h2>
            <h4>{service.title}</h4>
            <div class="card-body">
              <p class="card-text">{service.paragrap}</p>
            </div>
          </div>
            </div>
           </div>
       ))}
        </>
    );
};

export default Details;