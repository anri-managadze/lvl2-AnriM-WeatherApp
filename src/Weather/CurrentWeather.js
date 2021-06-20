import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader";
import './CurrentWeather.css';
import {API_KEY, API_MAIN_URL} from '../components/Config';
import Moment from 'moment';

const CurrentWeather = ({search}) => {
    const [weather, setWeather]= useState({});
    const [loading, setLoading]=useState(false);
    useEffect(()=>{
        if(!!search && search.trim().length > 0) {
            getData();
        }
    },[search]);

    const serializeWeather = (el)=> {
            return {
                date: el.ob_time,
                city: el.city_name,
                code: el.country_code,
                temp: el.temp,
                feel: el.app_temp,
                cloud: el.clouds,
                humanity: el.hr,
                uv: el.uv,
                dewpoint: el.dewpt,
                visibility: el.vis,
                icon: el.weather.icon,
                description: el.weather.description

            }
    }
    const getData = () => {
        setLoading(true);
        fetch(`${API_MAIN_URL}current?&city=${search}&units=metric&key=${API_KEY}`)
            .then(res => res.json())
            .then(weather => {
                setWeather(serializeWeather(weather.data[0]));

            }).finally(()=> setLoading(false));
    }

    return (
        <div>
            <Loader isLoading={loading}>
            {(weather.hasOwnProperty('city') ) ? (
                <div>
                    <div className='time'>{Moment(weather.date).format('h:mma, MMM DD')} </div>
                    <div className='city'>{weather.city}, {weather.code}</div>
                    <div className='temp'><img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt='w-p'/> {weather.temp} °C</div>
                    <div className='cloud'>Feels like {weather.feel}°C. Cloud: {weather.cloud} %. {weather.description}</div>
                    <div className='humdew'>
                        <div className='humanity'>Humanity : {weather.humanity} %. <span> UV: {weather.uv}</span></div>
                        <div className='dewpoint'>Dew point {weather.dewpoint} °C.<span> Visibility: {weather. visibility} Km</span></div>
                    </div>
                </div>
            ) : (' ')}
            </Loader>
        </div>
    );
};

export default CurrentWeather;