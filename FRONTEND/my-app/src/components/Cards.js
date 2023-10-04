import React, { useState } from 'react'
import { useDispathCart,useCart } from './ContextReducer'

export default function Cards(props) {
  let dispatch=useDispathCart();
  let data=useCart()
  const [qty,setqty]=useState(1);

  
  const handleaddtocart =async ()=>{
   await dispatch({type:"ADD",id:props.id,name:props.foodIt,quantity:props.quantity-(props.quantity-2)})
   
   console.log(data);
  }
  return (
    <div className='rounded'>
            <div>
          <div className="card mt-3" style={{"width": "18rem","maxHeight":"360px"}}>
  <img src={props.imagsrc} className="img-fluid" alt="..." style={{"height":"220px","objectFit":"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodIt}</h5>
    
    <div className='container w-100'>
     <div className="m-2 font-weight-bold">Quantity:{props.quantity}</div>
     
     

    </div>
  </div>
  <hr>
  </hr>
      <button className={'btn btn-success justify-center'}onClick={handleaddtocart}>Add to MyCart</button>
</div></div>
    </div>
  )
}
