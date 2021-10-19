import React, { useEffect, useState } from 'react';
import ServicesCart from '../ServicesCart/ServicesCart';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('./nova.json')
        .then(res => res.json())
        .then(data => setservices(data))
    },[])
    return (
        <div>
           <h2 className="text-center" >All Services</h2> 
           <div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4"> 
            {
                services.map(service=><ServicesCart
                    key={services.id}
                    service={service}
                     ></ServicesCart>)
            }
             </div> 
            </div> 
                 
            </div> 
          </div>
        </div>
    );
};

export default Services;