import React from 'react'
import Navbar from '../components/web/navbar/Navbar.jsx'
import Footer from '../components/web/footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
export default function Layout({user}) {
  return (
    <>
    <Navbar user={user}/>
    <Outlet/>
    <Footer/>
    </>
  )
}
