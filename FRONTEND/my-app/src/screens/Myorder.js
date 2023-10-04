import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Myorder() {

    const [orderData, setorderData] = useState({})

    const fetchMyorder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myrequestdata", {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let  response = await res.json()
            // console.log(response);
            
         setorderData(response)
        
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyorder()
    }, [])
   
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>

                    {orderData ? Array(orderData).map(data => {
                         console.log(data)
                        return (
                            data.orderdata ?
                                data.orderdata.request_data.slice(0).reverse().map((item) => {
                                    console.log(item)
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {console.log("Hora hai")}
                                                    {arrayData.O_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.O_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                       
                                                                        <span className='m-1'>{data}</span>
                                                                      
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}
