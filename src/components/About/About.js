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
            <h2 className="title">Why Choose Carrier
            </h2>
            <p className="text-black mt-3 ">
            career coach helps you establish realistic goals, discover solutions <br/> to challenges you're up against, develop action plans, build self- <br/>confidence, and instills motivation to take action unlike many job<br/> seekers who do the minimum and hope for the best. It's up to you <br/>to take charge of your career—not someone else's.
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