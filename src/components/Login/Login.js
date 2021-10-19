import React, { useState } from 'react';
import { useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile } from "firebase/auth";


const Login = () => {
   const { singInUsingGoogle} = useAuth();
   const location = useLocation();
    console.log( 'came from', location.state?.form);

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('');
   const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const toggleLogin = e =>{
    setIsLogin(e.target.checked);
  }

  const handleNameChange = e =>{
    setName(e.target.value);
  }
   const handleEmailChange = e =>{
    setEmail(e.target.value);
  }

  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }
      
  const handleRegistration = e =>{
    e.preventDefault();
    console.log(email, password);
    if(password.length < 6) {
      setError('password Must be at least 6 characters long');
      return;
    }
    
    if(isLogin) {
        processLogin(email, password)
    } 
    else {
        registerNewUser(email, password);
    }
   
  }

  const processLogin = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
    })
    .catch(error => {
      setError(error.message);
    })
  }

  const setUserName = () =>{
       updateProfile(auth.currentUser,{displayName: name})
       .then(result => { })
  }
  const registerNewUser =(email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      setError('');
      setUserName('')
    })
  }
    return (
    
    <div className=" container ">
    <div className="mx-5 mt-5 mb-5 shadow p-3 mb-5 bg-body rounded  w-50">
     <h2 className="btn btn-primary">Please {isLogin ? 'Login': 'Registor'}</h2>

       { !isLogin &&<div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
        <input onBlur={handleNameChange}  type="text" className="form-control rounded-pill w-100 " placeholder="Your Name" required/>
        </div>
      </div>}
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
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input  onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
         Already Registered?
        </label>
      </div>
    </div>
  </div>
  <div className="row  text-danger">{error}</div>
  <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
 </form>
       <div>---------------------------</div>
               <boutton 
               onClick={singInUsingGoogle}
               className="btn btn-warning mt-2"
               >Google Sing In</boutton>

            </div>
        </div>
    );
};

export default Login;