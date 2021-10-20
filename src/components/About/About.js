import React from 'react';
import img from './../../images/imgabout.png'

const About = () => {
    return (
       < div className="mt-5">
            <h2 className="text-center">About Us</h2>
            <div className="container  mb-5">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-7 mb-4">
            <h2 className="title">Why Choose Hospital
            </h2>
            <p className="text-black mt-3 ">
          Nova24bd.com is our online health care partner for connecting and storing health care information. It is a secured online platform for connecting patient, doctor, hospital, diagnostic centre, pharmacy and other healthcare professionals together. Medicare24bd.com provides a secured web cloud for storing patient prescriptions, diagnostic reports, healthcare data and patient medical history; exchanging healthcare information among different healthcare partner and professionals. The security of this web cloud is ensuring by two steps authentication. The features and services provided by medicare24bd.com are

            Online Profile for patient, doctor, radiologist, hospital, diagnostic centre and other health professional with two step authenticated secured logging to medicare24bd.com web cloud.
            </p>
          </div>
          <div className="col-md-5">
          <img src={img} alt="..."></img>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default About;