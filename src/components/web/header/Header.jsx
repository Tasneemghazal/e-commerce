import React from 'react'
import style from './header.module.css'
export default function Header() {
  return (
    <div className={`${style.header}`}>
    <h1 className={`${style.title}`}>Welcome To Tasneem Store</h1>
    <div className={`${style.welcome}`}>
    <h2 className={`${style.title2}`}>Everything you are looking for!</h2>
    </div>
    
    </div>
  )
}
