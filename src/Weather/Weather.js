import React from 'react';
import  { useState } from 'react';

import './style.css'
import CustomizedDialogs from "./Modal";

function Search({query,setQuery,weather,setWeather}) {

    const current = (e) => {
        e.preventDefault();
            fetch(`https://api.weatherbit.io/v2.0/current?&city=${query}&units=metric&key=f9def38c452946cc9c37dcc98089db29`)
                .then(res => res.json())
                .then(weather => {
                    setWeather(weather);
                    setQuery('');
                    console.log(weather);
                });
    }
    return (
            <div>
                <form onSubmit={current}>
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                        />
                       <button >Search</button>
                </form>
                {(typeof weather.data !='undefined') ? (
                <div>
                    <div className='time'>{weather.data[0].datetime}</div>
                    <div className='city'>{weather.data[0].city_name}, {weather.data[0].country_code}</div>
                    <div className='temp'> {weather.data[0].temp} °C</div>
                    <div className='cloud'>Feels like {weather.data[0].app_temp}°C. Cloud: {weather.data[0].clouds} %.</div>
                    <div className='humdew'>
                    <div className='humanity'>Humanity : {weather.data[0].rh} %.  UV: {weather.data[0].uv}</div>
                    <div className='dewpoint'>Dew point {weather.data[0].dewpt} °C. Visibility: {weather.data[0].vis} Km</div>
                </div>
                    <CustomizedDialogs weather={weather} setWeather={setWeather}/>
                </div>
                    ) : (' ')}
            </div>
    )
}

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');
    return (
        <main>
            <div className='container'>
                <Search query={query} setQuery={setQuery} weather={weather} setWeather={setWeather} />

            </div>
        </main>
    );
};

export default Weather;
