import React, { useEffect, useState } from 'react'
import './Weather.css';

const Weather = () => {
    
    const key="0fe22bd6a07853a2b664b18f2df69540";
  
    const[weathervar,setWeather]=useState([]);
    const [w2,setW2]=useState([]);
    const[search,setSearch]=useState('');
    const[dosearch,setDo]=useState('');
    useEffect(()=>
    {
        const Weather=async()=>
        {
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dosearch}&units=metric&appid=0fe22bd6a07853a2b664b18f2df69540`);
            const data=await response.json();
            setWeather(data);
            const{temp,humidity,pressure }=data.main;
            const{country,sunrise,sunset}=data.sys;
            const{description}=data.weather[0];
            const obj={
                temp,humidity,pressure,country,sunrise,sunset,description
            }
            
        
            setW2(obj);  
        }
    
       Weather();
    },[dosearch])
    
    const doSearch=()=>
    {
        setDo(search);
    }
    console.log(dosearch);
  return (
    <>
    <h1 className='Header'>Weather</h1>
    <div className='Main'>
      <div>
        <input type="search" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={doSearch}>Search</button>
      </div>
      <div className='Inner'>
        <h3>Description{w2.description}</h3>

        <h3>Temp:{w2.temp}</h3>
        <h3>Pressure:{w2.pressure}</h3>
        <h3>Humidity:{w2.humidity}</h3>
        <div className='In-inner'>
    <h5>Country:{w2.country}</h5>
    <h5>Sunriese:{w2.sunrise}</h5>
    <h5>Sunset:{w2.sunset}</h5>
        </div>
      </div>
    </div>
    </>
  )
  
}

export default Weather
