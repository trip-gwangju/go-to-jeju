import React, { useEffect, useState } from 'react';
import jejuweather from "../img/jeju-design.jpg";
import "../styles/weather.css";
import axios from 'axios';
import windImg from "../img/wind.png";

function Weather(props) {
    const [weatherData , setWeatherData] = useState({});
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY

    const fetchData = async() => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=${weatherApiKey}&units=metric`)
        .then((res) => {
            setWeatherData(res.data)
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    console.log(weatherData);
    
    return (
        <div>
            <img src={jejuweather} className="jejuweather" alt='배경사진'/>
            <p className='weatherMain'>현재 날씨 : {weatherData?.weather?.[0]?.main}</p>
            <p className='pressure'>기압 : {weatherData?.main?.pressure}</p>
            <p className='temp'>온도 : {weatherData?.main?.temp}C</p>
            <p className='feelsLike'>체감온도 : {weatherData?.main?.feels_like}C</p>
            <p className='tempMin'>최저온도 : {weatherData?.main?.temp_min}C</p>
            <p className='tempMax'>최고온도 : {weatherData?.main?.temp_max}C</p>
            <p className='humidity'>습도 : {weatherData?.main?.humidity}%</p>
            <p className='windSpeed'>풍속 : {weatherData?.wind?.speed}m/s</p>
            <p className='clouds'>구름 : {weatherData?.clouds?.all}%</p>
            <p >{weatherData?.weather?.main}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`} alt="하하하하이미지" className='img'/>
            <img src={windImg} className='windImg'/>
        </div>
    );
}

export default Weather;