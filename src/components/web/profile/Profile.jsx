import React from 'react'
import { UserContext } from '../context/User';
import { useContext } from 'react';
import style from './profile.module.css'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
export default function Profile() {
    
  return (

        <aside className={`${style.profile}`}>
          <div className={`${style.profile_links}`}>
            <nav>
              <Link to="">About</Link>
              <Link to="contact">Contact</Link>
              <Link to="orders">My Orders</Link>
            </nav>
          </div>
          <div className={`${style.userData} pt-4`}>
            <Outlet/>
          </div>
        </aside>
  )
}
