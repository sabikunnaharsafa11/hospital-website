import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
       < div className="login-from d-flex justify-content-center">
            <div className="mt-5 mb-5">
                <h2>Sign Up</h2>
                <from onSubmit="">
                 <input type="email" name="" id=""  placeholder="Your Email" />
                 <br />
                 <input type="password" name="" id="" placeholder="Your Password" />
                 <br />
                 <input type="password" name="" id="" placeholder="Re-enter Password" />
                 <br />
                 <input type="submit" value="Submit" />
               </from>
               <p>Already have an accout? <Link to="/login">Login</Link></p>
               <div>--------or-------</div>
               <boutton className="btn-regular">Google Sing In</boutton>

            </div>
        </div>
    );
};

export default Register;