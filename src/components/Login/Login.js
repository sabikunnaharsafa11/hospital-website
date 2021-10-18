import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
   const {user, singInUsingGoogle} = useAuth();
   const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')


   const handleEmailChange = e =>{
    setEmail(e.target.value);
  }

  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }

     const handleRegistration = e =>{
        console.log(email, password);
        e.preventDefault();
     }
    return (
    
        <div className=" container ">
         <div className="mx-5 mt-5 mb-5 shadow p-3 mb-5 bg-body rounded  w-50">
         <h2>Login</h2>
     <form onSubmit={handleRegistration}>
    <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange}  type="email" className="form-control rounded-pill w-100 " id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"> Password:</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control w-100  rounded-pill" id="inputPassword3" required/>
    </div>
  </div>

  <button type="submit" className="btn btn-danger">Sign in</button>
</form>
               <p>new to ema-john? <Link to="/register">sign Up</Link></p>
               <div>---------or-------</div>
               <boutton 
               onClick={singInUsingGoogle}
               className="btn btn-dark"
               >Google Sing In</boutton>

            </div>
        </div>
    );
};

export default Login;