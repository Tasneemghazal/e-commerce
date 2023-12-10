import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import { TailSpin } from "react-loading-icons";
export default function UserInfo() {
    const{userData,loading}=useContext(UserContext);
    if(loading){
      return (
        <>
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </>
      );
    }
  return (
    <>
    <h2>{userData.userName}</h2>
    <img src={userData.image.secure_url}/>
    </>
  )
}
