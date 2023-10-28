
import './WeatherApp.css'
import clear_icon from "../Asstes/clear.png" 
import cloud_icon from "../Asstes/clouds.png"
import dizzle_icon from  "../Asstes/drizzle.png"
import humidity_icon from "../Asstes/humidity.png"
import mist_icon from "../Asstes/mist.png"
import rain_icon from "../Asstes/rain.png"
import search_icon from "../Asstes/search.png"
import snow_icon from "../Asstes/snow.png"
import wind_icon from "../Asstes/wind.png"
import { useState } from 'react'

const WeatherApp = () => {

  let api_key="eb5ae271374a81aef15d534ce844447e";

  const[wicon,setWicon]= useState(cloud_icon);


    const search = async () =>{
       const element=document.getElementsByClassName("cityInput")
         if(element[0].value==="")
         {
            return 0;
         }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response  = await fetch(url);
        let data= await response.json(); 

        const humidity =document.getElementsByClassName("humidity-percent");
        const wind= document.getElementsByClassName("wind-rate");
        const temprature= document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        
 
        humidity[0].innerHTML=data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"km/h";
        temprature[0].innerHTML =Math.floor(data.main.temp)+"°c";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
        }

        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
        }

        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(dizzle_icon);
        }

        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(dizzle_icon);
        }
        
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }

        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }

        else  
        {
            setWicon(clear_icon);
        }

    }

    

  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'/>
            <div className='search_icon' onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className='weather_image'>
            <img src={wicon} alt='' />
        </div>
        <div className='weather-temp'>24°c </div>
        <div className='weather-location'>London</div>
        <div className='data-container'>

            <div className='element'>
                <img src={humidity_icon} alt='' className='icon' />
                <div className='data'>
                    <div className='humidity-percent'>64%</div>
                    <div className='text'>Humidity</div>
                </div>
            </div>

            <div className='element'>
                <img src={wind_icon} alt='' className='icon' />
                <div className='data'>
                    <div className='wind-rate'>18 km/h</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>






        </div>


    </div>
  )
}

export default WeatherApp