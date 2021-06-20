import React, {useEffect, useState} from 'react';
import './SearchBar.css';

const SearchBar = ({query, onSubmit}) =>  {
    const [text, setText]=useState(query);
    useEffect(()=>{
        current();
    },[]);

    const current = (e) => {
        !!e && e.preventDefault();
        onSubmit (text);
    }
    return (
        <div className='searchbar'>
            <form onSubmit={current}>
                <input
                    type="text"
                    placeholder='Search...'
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <button >Search</button>
            </form>

        </div>
    )
}
export default SearchBar;