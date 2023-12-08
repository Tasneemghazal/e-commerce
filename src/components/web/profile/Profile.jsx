import React from 'react'
import { UserContext } from '../context/User';
import { useContext } from 'react';
export default function Profile() {
    const{userData}=useContext(UserContext);
  return (
    <div>{userData?userData.userName:'loading'}</div>
  )
}
