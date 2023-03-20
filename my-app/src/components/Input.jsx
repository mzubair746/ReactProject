import React, {  useState } from 'react';
import './Input.css';


const Input = () => {
  
  // for (let key in props.item)
  // {
  //   console.log(key+":"+props.item[key]);
  // }
  
  
  const[name, setName]=useState('');
  const[email,setEmail]=useState('');
  const[rs,setRs]=useState('');
  const[obj,setObject]=useState('');
  
 // const[api, setApi]=useState('');

  


   

  //Getting values by using obj
  /*const dobj=
  {
nname:[name,setName],
nemail:[email,setEmail],
nrs:[rs,setRs]
}
 */

  
  const Cname=(e)=>
  {
setName(e.target.value);
  }
const Ename=(e)=>
{
setEmail(e.target.value);

}

const Ers=(e)=>
{
  setRs(e.target.value)

}

let x = false;
     
  const Sub=(event)=>
{
  x = true;
event.preventDefault();



var obj1=
{
name:name,
email:email,
rupees:rs
}
setObject(obj1);

setEmail('');
setName('');
setRs('');


}


  return (
    <>
    
    <div className='card'>
    <h3>Inputs</h3>
     <form  onSubmit={Sub}>
    {/* <p>Id{api.id}</p>
    <p>Title{api.title}</p> */}
<label>Name:</label>
<input type='text' value={name} onChange={Cname}/>
<label>Email:</label>
<input type="email"value={email} onChange={Ename} />
<label>Rs:</label>
<input type="number"value={rs} onChange={Ers} />
<button type="submit">Submit</button>

     </form> 
</div>
<script>
  
</script>
<div className='R'>
<h3>Result</h3>
<label>Name:</label>
<input  value={obj.name }/>
<label>Email:</label>
<input value={obj.email}/>
<label>Rs:</label>
<input  value={obj.rupees} />

</div>

    </>
  )
}

export default Input

