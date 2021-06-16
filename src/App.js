import './App.css';
import SearchBar from "./Weather/SearchBar";
import Daily from "./Weather/Daily";
import React, {useState} from "react";
import CurrentWeather from "./Weather/CurrentWeather";
import './Weather/style.css';
import ModalApp from "./components/Modal";



function App() {
    const [query, setQuery] = useState('kutaisi');
  return (
    <div>
        <SearchBar search={query} onSubmit={(newQuery)=>{setQuery(newQuery)}} />
        <div className='container'>
            <div>
            <div className='current'>
                <CurrentWeather search={query} />
            </div>
                <div className='modal'>
                    <ModalApp search={query}/>
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
