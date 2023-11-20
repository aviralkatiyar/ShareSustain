import React, { useState } from 'react'

import { Link } from 'react-router-dom'


export default function Posts() {
 const[credentials , setcredentials]=useState({
    CategoryName:" ",
   
    item_name
    :"",
    quantity:"",
    description:"",
    image_url:""


    
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/postdata",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },

            body:JSON.stringify({CategoryName:credentials.CategoryName, item_name:credentials.item_name,quantity:credentials.quantity, description:credentials.description, image_url:credentials. image_url})
        })
        const json=await response.json();
        console.log(json);
        if(!json.success){
            alert("enter valid details");
        }
    }

   const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
   }
  return (
    <div style={{"backgroundColor":""}}>
    <div className='container ' style={{"backgroundColor":"lightgreen"}}>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
    <label htmlFor="name" style={{"fontSize":"24px"}}>Category</label>
    <input type="text" className="form-control"  name="CategoryName"  value={credentials.CategoryName} onChange={onChange} placeholder="Enter Category"/>
   
  </div>
  <div className="form-group">
    <label  htmlFor="exampleInputEmail1" style={{"fontSize":"24px"}}>Food_Item</label>
    <input type="text" className="form-control" name="item_name" value={credentials.item_name} onChange={onChange}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter food item name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" style={{"fontSize":"24px"}}>Quantity</label>
    <input type="number" className="form-control" name="quantity" value={credentials.quantity} onChange={onChange} id="exampleInputPassword1" placeholder="Quantity"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" style={{"fontSize":"24px"}}>Description</label>
    <input type="text" className="form-control" name="description" value={credentials.description}  onChange={onChange} id="exampleInputPassword1" placeholder="describe your food"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" style={{"fontSize":"24px"}}>Image of food to be shared</label>
    <input type="text" className="form-control" name="image_url" value={credentials.image_url}  onChange={onChange} id="exampleInputPassword1" placeholder="image_url"/>
  </div>
 
  <button type="submit" className="btn btn-info" style={{"marginTop":"10px","color":""}}>Share</button>
</form>
</div> 
    </div>
  )
}
