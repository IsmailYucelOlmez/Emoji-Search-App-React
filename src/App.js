import React, { useEffect, useState } from 'react';
import './App.css';
import EmojiData from './emoji.json'


function App() {

  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
 
  useEffect(()=>{

    const filteredData=EmojiData.filter(emoji=>emoji.title.toLowerCase().includes(search.toLowerCase()))
    setData(filteredData);

  },[search])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emoji Search App</h1>
       
      </header>
      <div className='search-input-field'>
        <input className='search-input' value={search} onChange={(e)=>{ setSearch(e.target.value)}} type='text' placeholder='Search Emoji'></input>
      </div>
      <div className='emoji-content'>
        {
          data.map(emoji=>
            <div className='emoji-field'>
            <p >{emoji.symbol} {emoji.title}</p>
            </div>
          )
        }
      </div>
      
      

    </div>
  );
}

export default App;

//navigator.clipboard.writeText("metin"); kopyalama işlemi yapar