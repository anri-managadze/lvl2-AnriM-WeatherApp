import React, {useEffect, useState} from 'react';


const Daily = ({search}) => {
    const [data, setData]=useState({});
    useEffect(()=>{
        getData();
    }, [search]);
    const getData =()=> {
        fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&city=${search}&units=metric&key=1cd137c42bcd4af28ab1553501a00aab&days=8`)
            .then(res => res.json())
            .then(weather => {
                setData(weather);
            });
    }
    return (
        <div>
            <h4>8 Day Forecast</h4>
            {(typeof data.data != 'undefined') ? (
                <ul>
                    {data.data.map((el, index) => {
                        return (
                            <li key={index}>{el.datetime}  {el.min_temp} / {el.max_temp} °C <span>{el.weather.description}</span> </li>
                        )
                    })}
                </ul>
            ) : (' ')}
        </div>
    );

}
export default Daily;