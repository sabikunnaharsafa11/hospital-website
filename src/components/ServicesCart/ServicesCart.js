import React from 'react';
import './ServicesCart.css'

const ServicesCart = (props) => {
    const {name, price, coursetime, img} = props.service;
    return (
        <div>
     <div className="card course-card course-section d-flex justify-content-center ounded-20px">
      <img className="img-desigen" src={img} alt="" />
      <div className="mt-5 text-center">
       <h4 >{name}</h4>
        <h5 className="text-danger fw-bold">Price: ${price}</h5>
        <p className="fw-normal">coursetime: {coursetime}</p>
         <div className="mt-3 mb-3">
         <button type="button" class=" btn btn-dark btn1">Details</button>
      </div>      
         </div>
      </div>      
        </div>
    );
};

export default ServicesCart;