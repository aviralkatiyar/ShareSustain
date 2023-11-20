import React from 'react';
import { useState } from 'react';
import { useCart } from './ContextReducer';
import { Link,useNavigate} from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';



export default function Navbar() {


  let data = useCart();
  const navigate = useNavigate();
  const[cartview,setcartview]=useState(false);

  const handlelogout=()=>{
  localStorage.removeItem("authtoken");
  navigate("/login")
  }


  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/" >ShareSustain</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></Link>
        </li>

        {(localStorage.getItem("authtoken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/Myrequests">My Requests</Link>
      </li>
      
        :""}
         {(localStorage.getItem("authtoken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/MYposts">Share</Link>
      </li>
      
        :""}
         {(localStorage.getItem("authtoken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">Communities</Link>
      </li>
      
        :""}
      </ul>
      {(!localStorage.getItem("authtoken"))?
     <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
        
        
          <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
          </div>
          :
          <div>
          <div className='btn bg-white text-success mx-2 'onClick={()=>setcartview(true)}>
            MyCart{" "}
            <span style={{"border":"2px solid red","borderRadius":"80%","color":"white","backgroundColor":"red"}}>{data.length}</span>
          
          </div>
  {cartview?<Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}

          <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>
            Logout

          </div>

          </div>
          }
    </div>
  </div>
</nav>
      
    </div>
  )
}
