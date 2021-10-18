import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ServicesCart from '../ServicesCart/ServicesCart';

const Home = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('./nova.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center">Choose Your Course</h2>

<div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4"> 
            {
                services.slice(2,6).map(service =><ServicesCart
                    key={services.id}
                    service={service}
                     ></ServicesCart>)
            }
             </div> 
            </div> 
                 
            </div> 
            <button> view</button>
          </div>
          <About></About>
  
           
        </div>
    );
};

export default Home;