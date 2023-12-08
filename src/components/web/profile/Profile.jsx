import React from 'react'
import { UserContext } from '../context/User';
import { useContext } from 'react';
export default function Profile() {
    const{userData}=useContext(UserContext);
    console.log(userData)
  return (

    <div className="container">
      <div className="row m-auto text-center">
        <div className="col-md-4">
          <img src={userData?userData.image.secure_url:""}/>
        </div>
      <div className="col-md-8">
        <h1 className='text-capitalize'>{userData?userData.userName:""}</h1>
        <p>{userData?userData.email:""}</p>
      </div>
      </div>
    </div>
  )
}
