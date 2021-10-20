import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../images/download.png'
import './Header.css'


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-drak shadow p-3  bg-body rounded">
            <div className="container d-flex justify-content-between ">
                <div>
                <img className="d-flex justify-content-start"  src={logo} alt="" width="40%" height="20%"/>
                </div>
                <div>
                <div className=" collapse navbar-collapse fs-5" id="navbarSupportedContent">
                      
                <NavLink to="/home" activeClassName="selected"
                    activeStyle={{
                    fontWeight: "bold",
                    color:"red",
                    textDecoration:'underline'
                  }} className="nav-link" aria-current="page"> Home</NavLink>                        
                            
                <NavLink to="/services"  activeClassName="selected"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: 'underline'
                  }} className="nav-link">Services</NavLink> 
                   

                  <NavLink to="/about"  activeClassName=""
                activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: 'underline'
                  }} className="nav-link" >About</NavLink>     
                  
                  { user.email && <span style={{color:'black'}}> Hey {user.displayName} </span>}
       
                    {
                        user.email ? 
                        <button className="btn btn-dark" onClick={logOut}>log Out</button>
                        :
                        <NavLink to="/login"
                    activeClassName=""
                 className="nav-link"
                    > <button className="btn btn-dark">Login</button></NavLink>}    
                   </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;