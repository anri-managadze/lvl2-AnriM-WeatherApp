import React, {useEffect, useState} from 'react';
import Modal from "../components/Modal";
import './Hourly.css';
import {API_KEY, API_MAIN_URL} from "../components/Config";

const Hourly = ({search}) => {
    const [data, setData]=useState({});
    useEffect(()=>{
        getData();
    }, [search]);
    const getData =()=> {
        fetch(`${API_MAIN_URL}forecast/hourly?&city=${search}&units=metric&key=${API_KEY}&hours=12`)
            .then(res => res.json())
            .then(weather => {
                setData(weather);
            });
    }
    return (
        <div>
            <Modal btnText='Hourly Forecast' title={<h4>12 Hours Forecast</h4>}>
            {(typeof data.data != 'undefined') ? (
                <ul>
                    {data.data.map((el, index) => {
                        return (
                            <li key={index}>{el.datetime} <img src={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`} alt='w-p'/> {el.temp} °C <span>{el.weather.description}</span></li>
                        )
                    })}
                </ul>
            ) : (' ')}
            </Modal>
        </div>
    );


};

export default Hourly;