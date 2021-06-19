import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader";
import './Daily.css';
import {API_KEY, API_MAIN_URL} from '../components/Config';


const Daily = ({search}) => {
    const [data, setData]=useState({});
    const [loading, setLoading]=useState(false);
    useEffect(()=>{
        getData();
    }, [search]);
    const getData =()=> {
        setLoading(true);
        fetch(`${API_MAIN_URL}forecast/daily?&city=${search}&units=metric&key=${API_KEY}&days=8`)
            .then(res => res.json())
            .then(weather => {
                setData(weather);
            }).finally(()=> setLoading(false));
    }
    return (
        <div>
            <Loader isLoading={loading}>
                <h4>8 Day Forecast</h4>
                {(typeof data.data != 'undefined') ? (
                    <ul>
                        {data.data.map((el, index) => {
                            return (
                                <li key={index}>{el.datetime} <img src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`} alt='weath'/> {el.min_temp} / {el.max_temp} °C <span>{el.weather.description}</span> </li>
                            )
                        })}
                    </ul>
                ) : (' ')}
            </Loader>
        </div>
    );

}
export default Daily;