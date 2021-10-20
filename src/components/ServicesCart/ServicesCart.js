import React from 'react';

import { Link } from 'react-router-dom';
import './ServicesCart.css'

const ServicesCart = (props) => {
    const { id, name, paragrap, title, img} = props.service;
  
    
    return (
        <div>
     <div className="card course-card course-section d-flex justify-content-center ounded-20px">
      <img className="img-desigen" src={img} alt="" />
      <div className="mt-4 text-start ms-4">
       <h4 >{name}</h4>
         <h5>{title}</h5>
        <p className="fw-normal text-start "> {paragrap}</p>
         <div className="mb-4">
         <button type="button" class=" btn btn-dark btn1 "><Link className="btn2" to={`/details/${id}`}>Read More</Link></button>
      </div>      
         </div>
      </div>      
        </div>
    );
};

export default ServicesCart;