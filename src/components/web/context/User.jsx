import axios from 'axios';
import {createContext, useState} from'react';
import { useEffect } from 'react';
export let UserContext = createContext(null);
export function UserContextProvider({children}){
    let [userToken,setUserToken] =useState(null);
    let [userData,setUserData] = useState(null);
    let [loading,setLoading] = useState(true);
    const getUserData = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,{headers:{Authorization:`Tariq__${userToken}`}});
        setUserData(data.user);
        setLoading(false);

    }
    useEffect(()=>{
        getUserData();
    },[userToken]);
    return<UserContext.Provider value={{userToken,setUserToken,userData,setUserData,loading}}>
        {children}
    </UserContext.Provider>
    
}