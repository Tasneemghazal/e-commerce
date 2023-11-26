import React from 'react'
import { Link } from 'react-router-dom'
import Register from '../register/Register'
import {FaOpencart  } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-5  ">
      <div className="container">
      <a className="navbar-brand" href="#"> <FaOpencart/> T-shop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Categories</a>
          </li>

          <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        
        
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Accounts
        </a>
        <ul className="dropdown-menu ">
          <li><Link to='/register' className="dropdown-item" >register</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link to='/login' className="dropdown-item" > <CiLogin/> login</Link></li>
        </ul>
      </li>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}
