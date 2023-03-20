import React, { useEffect, useState } from 'react'

function P() {
    const [id,setId]=useState('');
const [p,setP]=useState('');
const [t,setT]=useState('');
const [f,setF]=useState('');

const ID=(e)=>
{
setId(e.target.value)
}

const Price=(e)=>
{
setP(e.target.value);
}
const Title=(e)=>
{
    setT(e.target.value);
}

const SUB=()=>
{
   // e.preventDefault();
    const obj=
    {
        p,
        t,
        f
    }
    setF(obj);
}

    useEffect(()=>
    {
        const fun=async()=>
        {
            const response=await fetch('https://fakestoreapi.com/products',
            {
                method:'POST',
                headers:
                {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    id:f.id,
                    title:f.t,
                    price:f.p

                })
            });
            const data=await response.json();


            console.log(data);
        }

    }
    )
    
  return (
    <>
    <div>
        <form onSubmit={SUB}>
            <label>Id:</label>
            <input type='number' onChange={ID}/>
            <label>Title:</label>
            <input type="text" onChange={Title}/>
            <label>Price:</label>
            <input type='text'  onChange={Price}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default P
