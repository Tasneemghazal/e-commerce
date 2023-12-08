import axios from 'axios';
import {createContext, useState} from'react';
import { useEffect } from 'react';
export let UserContext = createContext(null);
export function UserContextProvider({children}){
    let [userToken,setUserToken] =useState(null);
    let [userData,setUserData] = useState(null);
    const getUserData = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,{headers:{Authorization:`Tariq__${userToken}`}});
        setUserData(data.user);

    }
    useEffect(()=>{
        getUserData();
    },[userToken]);
    return<UserContext.Provider value={{userToken,setUserToken,userData,setUserData}}>
        {children}
    </UserContext.Provider>
    
}