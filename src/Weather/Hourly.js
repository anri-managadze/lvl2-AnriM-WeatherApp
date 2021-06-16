import React, {useEffect, useState} from 'react';

const Hourly = ({search}) => {
    const [data, setData]=useState({});
    useEffect(()=>{
        getData();
    }, [search]);
    const getData =()=> {
        fetch(` https://api.weatherbit.io/v2.0/forecast/hourly?&city=${search}&units=metric&key=1cd137c42bcd4af28ab1553501a00aab&hours=6`)
            .then(res => res.json())
            .then(weather => {
                setData(weather);
                console.log(weather)
            });
    }
    return (
        <div>
            <h4>5 Day Forecast</h4>
            {(typeof data.data != 'undefined') ? (
                <ul>
                    {data.data.map((el, index) => {
                        return (
                            <li key={index}>{el.wind_dir} </li>
                        )
                    })}
                </ul>
            ) : (' ')}
        </div>
    );


};

export default Hourly;