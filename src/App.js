import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard.jsx';


const API_URL = process.env.API_URL;



function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  }
  
  useEffect(() => {
    searchMovies("Superman");
  }, [])

  return (
    <div className="app">
      <h1> Movieland </h1>
      <div className="search">
        <input placeholder='Search for movies' value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <img src={SearchIcon} alt="search"
          onClick={()=>searchMovies(search) }/>
      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {
             movies.map((movie) => (
              <Moviecard movie={movie}/>
             ))
            }
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found!!!</h2>
          </div>
        )
      }
            
     
    </div>

  );
};

export default App