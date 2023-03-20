import React, { useState,useEffect } from 'react'
import './Ap.css';

function Ap() {
  const[d,setD]=useState([]);
  useEffect(() => {
    try{
       fetch('https://api.storerestapi.com/products').
       then (response=>
        {
          return response.json();
        }
      
       ).then(data=>{
        setD(data);
       });
      }
      catch(error)
      {
console.log("here  is error:",error);
      }
      

       
  }, []);


// console.log(d);
// var CartCounter =0;
// const Fun=()=>
// {
//   CartCounter++;
//   console.log("Add to cart");
//   alert(CartCounter);
// }

// const Del=(de)=>
// {
//   const Delete=d.filter((product)=>
//   {
//     return d.id!==de;
//   });
//    setD(Delete);
// console.log(d);
// }

return (
  <div className='product'>
  
   {d.map((product)=>
   


   <>
    

<div className="card">
    <img src={product.image}/>
    <p>{product.title}</p>
    <h3>{product.price}</h3>
    {/* <button className='btn' onClick={Fun}>Add to cart</button> */}
    {/* <button onClick={()=>Del(product.id)}></button> */}
    </div>
   
    </> )}
   
  </div>
)
}

export default Ap
