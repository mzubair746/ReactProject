import React, { useEffect, useState } from 'react'


function Sec() {
  const[s,setS]=useState('');
 const key='3e3a1f93dbc34f2ca0e103206231003';
 //
 var x=10.99;
 var y=44.34;

  useEffect(()=>
  {
     const  fetchData=async ()=>
    {
      
      //let response=await fetch('https://fakestoreapi.com/products');
 let response=await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=pakistan&aqi=no`);

let data=await response.json();
setS(data);
    }
    
    fetchData();
  },[]);
  if (!s) {
    return <div>Loading...</div>;
  }
  console.log(s);

  return (
    <>
      <h3>hi</h3>
     
    
    
     
    </>
  )
}

export default Sec
