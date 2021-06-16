import React, {useEffect, useState} from 'react';


const CurrentWeather = ({search}) => {
    const [weather, setWeather]= useState({});
    useEffect(()=>{
        if(!!search && search.trim().length > 0) {
            getData();
        }
    },[search]);

    const serializeWeather = (data)=> {
        return  data.map(el=> {
            return {
                data: el.datetime,
                city: el.city_name,
                code: el.country_code,
                temp: el.temp,
                feel: el.app_temp,
                cloud: el.clouds,
                humanity: el.hr,
                uv: el.uv,
                dewpoint: el.dewpt,
                visibility: el.vis
            }
        })
    }

    const getData = () => {
        fetch(`https://api.weatherbit.io/v2.0/current?&city=${search}&units=metric&key=1cd137c42bcd4af28ab1553501a00aab`)
            .then(res => res.json())
            .then(weather => {
                setWeather(weather);

            });
    }
    return (
        <div>
            {(typeof weather.data !='undefined') ? (
                <div>
                    <div className='time'>{weather.data[0].datetime}</div>
                    <div className='city'>{weather.data[0].city_name}, {weather.data[0].country_code}</div>
                    <div className='temp'> {weather.data[0].temp} °C</div>
                    <div className='cloud'>Feels like {weather.data[0].app_temp}°C. Cloud: {weather.data[0].clouds} %. {weather.data[0].weather.description}</div>
                    <div className='humdew'>
                        <div className='humanity'>Humanity : {weather.data[0].rh} %. <span> UV: {weather.data[0].uv}</span></div>
                        <div className='dewpoint'>Dew point {weather.data[0].dewpt} °C.<span> Visibility: {weather.data[0].vis} Km</span></div>
                    </div>
                </div>
            ) : (' ')}
        </div>
    );
};

export default CurrentWeather;