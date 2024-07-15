// api.openweathermap.org/data/2.5/weather?q=pune&appid=846977e18020914feccaeae795a69dbc
import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard';

const Temp = () => {
    const[searchValue, setSearchValue] = useState("yamunanagar");
    const[tempInfo,settempInfo] =useState({});

    const getWeatherInfo = async() =>{
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=846977e18020914feccaeae795a69dbc`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const {temp,humidity,pressure} =data.main;
            const {main : weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }
            settempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }

    };

    useEffect(() =>{
        getWeatherInfo();
        },[]
    );

  return (
    <>
    <div className='main-div'>
        <div className='container'>
            <div className='search'>
                <input type='search' placeholder='search...' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} autoFocus
                ></input>
                <button className='search-button' type='search' onClick={getWeatherInfo}>Search</button>
            </div>
            
        </div>
    </div>
    <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp