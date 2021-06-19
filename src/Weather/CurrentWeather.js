import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader";
import './CurrentWeather.css';
import {API_KEY, API_MAIN_URL} from '../components/Config';
import moment from 'moment'

const CurrentWeather = ({search}) => {
    const [weather, setWeather]= useState({});
    const [loading, setLoading]=useState(false);
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
        setLoading(true);
        fetch(`${API_MAIN_URL}current?&city=${search}&units=metric&key=${API_KEY}`)
            .then(res => res.json())
            .then(weather => {
                setWeather((weather));
            }).finally(()=> setLoading(false));
    }

    return (
        <div>
            <Loader isLoading={loading}>
            {(typeof weather.data !='undefined') ? (

                <div>
                    <div className='time'>{moment(weather.data[0].datetime).format('LLL')} </div>
                    <div className='city'>{weather.data[0].city_name}, {weather.data[0].country_code}</div>
                    <div className='temp'><img src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`} alt='w-p'/> {weather.data[0].temp} °C</div>
                    <div className='cloud'>Feels like {weather.data[0].app_temp}°C. Cloud: {weather.data[0].clouds} %. {weather.data[0].weather.description}</div>
                    <div className='humdew'>
                        <div className='humanity'>Humanity : {weather.data[0].rh} %. <span> UV: {weather.data[0].uv}</span></div>
                        <div className='dewpoint'>Dew point {weather.data[0].dewpt} °C.<span> Visibility: {weather.data[0].vis} Km</span></div>
                    </div>
                </div>
            ) : (' ')}
            </Loader>
        </div>
    );
};

export default CurrentWeather;