import React,{useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {FaOpencart  } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
import{CartContext} from '../context/Cart.jsx'
import { useQuery } from 'react-query';
import { UserContext } from '../context/User.jsx';
export default function Navbar() {
  let{userToken,setUserToken,userData,setUserData}=useContext(UserContext);

  let navigate =useNavigate();
  const {getCartContext} = useContext(CartContext);
  const getCart = async ()=>{
        const res = await getCartContext();
        return res;
  }
  const {data}=useQuery("cart",getCart);
 
 ;
  const logOut=()=>{
    console.log('test');
    localStorage.removeItem('userToken');
    setUserToken(null);
    setUserData(null);
    navigate('/');
  }
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
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Categories</a>
          </li>
          
          <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        {userToken?
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart <span className='bg-info'>{data?.count?data.count:<h2></h2>}</span></Link>
        </li>:null}
        
        
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {userData?userData.userName:'Accounts'}
        </a>
        <ul className="dropdown-menu ">
          {userToken == null ?
          <>
          <li><Link to='/register' className="dropdown-item" >register</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link to='/login' className="dropdown-item" > <CiLogin/> login</Link></li>
          </>
          :<>
          <li><Link to='/profile' className="dropdown-item" >Profile</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link onClick={logOut} className="dropdown-item" > <CiLogin/> Logout</Link></li>
          </>}
          
         
          
          
          
          
        </ul>
      </li>
        </ul>
      
      </div>
    </div>
  </nav>
  )
}
