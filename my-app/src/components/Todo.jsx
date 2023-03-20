import React, { useState } from 'react'
import './Todo.css';

const Todo = () => {
    const[variable,setVar]=useState("");
    const[variable2,setVar2]=useState([]);

const Show=()=>
{
  if(!variable)
  {
    alert("pls fill the field")

  }
  else{
    const obj={
      id:new Date().getTime().toString(),
name:variable
    }
   
setVar2([...variable2,obj]);
setVar(" ");
  } 
}
//console.log(variable2);

const Del=(index)=>
{
const uitem=variable2.filter((e)=>
{
  return (e.id !==index);
});
setVar2(uitem);
}

  return (
    <>

    <div className='To'>
    <h2>Todo List</h2>
    <input type='text' value={variable} onChange={(e,index)=>setVar(e.target.value)}/> 
    <button onClick={Show}>+</button>
    {variable2.map((e)=>
    {
      return(<>
      <div className='dele'  >
      <h4>{e.name}</h4>
      <button className='del' onClick={()=>Del(e.id)}>Del</button>
     
      </div>
      </>
      )
    })}
   
   
    </div>   
    </>
  )
}

export default Todo
