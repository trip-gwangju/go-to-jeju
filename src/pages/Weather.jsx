import React, { useEffect, useState } from 'react';
import jejuweather from "../img/jeju-design.jpg";
import "../styles/weather.css";
import axios from 'axios';
import windImg from "../img/wind.png";
import rain from "../img/rain.PNG";
import winter from "../img/winter.PNG";
import fall from "../img/fall.PNG";
import spring from "../img/spring.PNG";


function Weather() {
    const [weatherData , setWeatherData] = useState();
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY
    const [clothes , setClothes] = useState({});

    const fetchData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Jeju&appid=${weatherApiKey}&units=metric`)
        .then((res) => {
            setWeatherData(res.data);
            if(res.data.weather[0].main === "Rain"){
                setClothes(rain);
            }
            else if(res.data.weather[0].main!=="Rain" && Number(res.data.main.temp)<=4){
                setClothes(winter);
            }
            else if(res.data.weather[0].main!=="Rain"&&Number(res.data.main.temp)>=23){
                setClothes(spring);
            }
            else if(res.data.weather[0].main !== "Rain" && res.data.main.temp > 4 && res.data.main.temp < 23){
                setClothes(fall);
            }
        })
    }

    useEffect(()=>{
        fetchData();
    },[]);


    // console.log(weatherData?.weather?.[0]?.main);
    // console.log(clothes);
    

    return (
        <div>
            <img src={jejuweather} className="jejuweather" alt='배경사진'/>
            <p className='weatherMain'>{weatherData?.weather?.[0]?.main}</p>
            <p className='temp'>{weatherData?.main?.temp}℃</p>
            <p className='feelsLike'>체감온도 : {weatherData?.main?.feels_like}℃</p>
            <p className='tempMin'>{weatherData?.main?.temp_min}℃</p>
            <p className='slash'> / </p>
            <p className='tempMax'>{weatherData?.main?.temp_max}℃</p>
            <p className='humidity'>습도 : {weatherData?.main?.humidity}%</p>
            <p className='windSpeed'>{weatherData?.wind?.speed}m/s</p>
            <p >{weatherData?.weather?.main}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0]?.icon}.png`} alt="하하하하이미지" className='img'/>
            <img src={windImg} className='windImg'/>
            <p className='clothesText'>오늘 날씨에 따른 옷차림 추천</p>
            <img src={clothes ? clothes:null} className='clothes'></img>
        </div>
    );

}

export default Weather;
