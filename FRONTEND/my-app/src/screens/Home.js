import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards';

export default function Home() {
  const[search,setsearch]=useState('');
const [foodcat,setfoodcat]=useState([]);
const [fooditem,setfooditem]=useState([]);
const loaddata=async()=>{
  let res=await fetch("http://localhost:5000/api/fooddata",{
  method:"POST",
  headers:{
    'Content-Type':'application/json'

  }
});
res=await res.json()
setfooditem(res[0]);
setfoodcat(res[1]);
}

useEffect(()=>{
  loaddata()
},[])

  return (
    
    <div className='bg-light'>
     
        <div><Navbar/></div>
        <div style={{"marginLeft":"150px","marginTop":"50px"}} className='container'><img src={"https://www.fao.org/images/foodlosswastelibraries/idaflw/idaflw_website_en3aa2d84ef788491bad4de3cc2641bed6.jpg?sfvrsn=2e2a9183_8"} alt="Zero Waste Shopping" /></div>
        
        <div class="d-flex justify-content-center" style={{"width":"1190px","height":"30px","marginLeft":"170px"}}>
      <input class="form-control " type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      
    
        </div>
       <div className='container'>

        {
          foodcat
          ?foodcat.map((data)=>{
            return(

              <div className='row mb-3'key={data._id}>
              <div  className='fs-3 m-3'>
                {data.CategoryName}
                </div>
                <hr/>
                {fooditem ?fooditem.filter((item)=>(item.CategoryName===data.CategoryName)&&(item.item_name.toLowerCase().includes(search.toLocaleLowerCase())))
                .map(filterItems=>{
                  return(
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3 m-4'>
                      <Cards foodIt={filterItems.item_name}
                           imagsrc={
                            filterItems.image_url
                           }
                           quantity={
                            filterItems.quantity
                           }
                           id={
                            filterItems._id
                           }
                       />
                      </div>
                  )
                }

                ):<div>No Such Data Found</div>}
                
               </div>
            )

            
          })
          :""
        }
      
      
       
       </div>
        <div style={{"marginTop":"107px"}}><Footer/></div>
      
    </div>
  )
}
