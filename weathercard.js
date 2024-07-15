import React, { useEffect } from 'react'

const Weathercard = ({tempInfo}) => {
    const[weatherState, setweatherState] = React.useState("");
    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                    case "Clouds":
                    setweatherState("wi-day-cloudy");
                    break;
                    case "Haze":
                    setweatherState("wi-fog");
                    break;
                    case "Clear":
                    setweatherState("wi-day-sunny");
                    break;
                    case "Mist":
                    setweatherState("wi-day-fog");
                    break;
            
                default:
                    setweatherState("wi-day-sunny");
                    break;
            }
        }
    },[weathermood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`
  return (
    <div className='container-2'>
    <div className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState} icon-large`}></i>
                </div>

                <div className='weatherInfo'>
                    <div className='weather-div'>
                        <div className='temperature'>
                            <span>{temp}&deg;</span>
                        </div>
                        <div className='description'>
                            <div className='weatherCondition'>{weathermood}</div>
                            <div className='place'>{name}, {country}</div>
                        </div>
                    </div>
                    <div className='date'>{new Date().toString()}</div>
                </div>

                <div className='extra-temp'>
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-sunset'></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {timestr} PM<br/>
                            Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-humidity'></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {humidity}<br/>
                            Humidity
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-barometer'></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {pressure}<br/>
                            Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className='wi wi-strong-wind'></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {speed} <br/>
                            Windspeed
                        </p>
                    </div>
                </div>

            </div></div>
  )
}

export default Weathercard