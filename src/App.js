import React from "react";
import "./App.css";
import MovieCard from "./MovieCard";

import { useEffect, useState } from "react";
const API_URL = "https://www.omdbapi.com/?apikey=537f8e22";
// const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [Movie, setMovie] = useState([]);

  const [searchTerm, setSearchterm] = useState("");
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };
  useEffect(() => {
    searchMovie("game");
  }, []);

  function handleFormSubmit(e) {
    e.preventDefault();
    searchMovie(searchTerm);
  }

  return (
    <div className="app">
      <h1>MovieCenter </h1>
      <form className="search" onSubmit={handleFormSubmit}>
        <input
          placeholder="Enter the Movie"
          value={searchTerm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
        <button>
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx={10} cy={10} r={7}></circle>
   <line x1={21} y1={21} x2={15} y2={15}></line>
</svg>
        </button>
      </form>
      {Movie?.length > 0 ? (
        <div className="container">
          {Movie.map((movie, idx) => (
            <MovieCard data={movie} key={idx + ""} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
