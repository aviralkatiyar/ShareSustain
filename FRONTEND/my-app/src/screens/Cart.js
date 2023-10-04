import React from 'react'
import { useDispathCart,useCart  } from '../components/ContextReducer';



export default function Cart() {


    let data = useCart();
  let dispatch = useDispathCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 ' style={{"color":"white"}}>The Cart is Empty!</div>
      </div>
    )
  }

  const handlecheckout=async()=>{
    let userEmail=localStorage.getItem("userEmail");
    let response=await fetch("http://localhost:5000/api/orderdata",{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        request_data:data,
        email:userEmail,
        request_date:new Date().toDateString()
    })

}
    );
    if(response.status===200){
        dispatch({type:"DROP"})
    }

  }
  return (
    <div style={{"backgroundColor":"black"}}><div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
    <table className='table table-hover'>

<thead className='text-success fs-4'>
    <tr>
<th scope="col">FOOD ID</th>
<th scope="col">Food Name</th>
      </tr>
</thead>
<tbody style={{"color":"whitesmoke"}}>
{data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                
               
                
                <td ><button type="button" className="btn p-0"><img src={"logo.png"} alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}


</tbody>
    </table>
    <div>
        <button className='btn bg-success mt-5' onClick={handlecheckout}>Check out</button>
    </div>
    
    </div>
      
    </div>
  )
}
