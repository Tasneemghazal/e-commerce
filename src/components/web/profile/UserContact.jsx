import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
export default function UserContact() {
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
    <h2>{userData.email}</h2>
    <h2>{userData.role}</h2>
    </>
  )
}