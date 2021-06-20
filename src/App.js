import './App.css';
import SearchBar from "./Weather/SearchBar";
import Daily from "./Weather/Daily";
import React, {useState} from "react";
import CurrentWeather from "./Weather/CurrentWeather";
import './Weather/style.css';
import Hourly from "./Weather/Hourly";
import Logo from "./components/Logo";



function App() {
    const [query, setQuery] = useState('kutaisi');
  return (
    <div>
        <header>
            <Logo />
            <SearchBar search={query} onSubmit={(newQuery)=>{setQuery(newQuery)}} />
        </header>
        <div className='container'>
            <div>
            <div className='current'>
                <CurrentWeather search={query} />
            </div>
                <div className='modal'>
                    <Hourly search={query}/>
                </div>
            </div>
            <div className='daily'>
                <Daily search={query} />
            </div>
        </div>

    </div>
  );
}
export default App;
