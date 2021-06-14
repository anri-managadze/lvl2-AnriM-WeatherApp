import React from 'react';


const Daily = ({weather, setWeather}) => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily&city=kutaisi&units=metric&key=f9def38c452946cc9c37dcc98089db29&days=8`)
        .then(res => res.json())
        .then(weather => {
            setWeather(weather);

        });
    return (
        <div>
            <h2>8 Day Forecast</h2>
            {(typeof weather.data != 'undefined') ? (
                <ul>
                    {weather.data.map((el, index) => {
                        return (

                            <li key={index}>{el.datetime}</li>
                        )
                    })}
                </ul>
            ) : (' ')}
        </div>
    );

}
export default Daily;