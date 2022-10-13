import React from "react";
import "./App.css";
import SearchIcon from "./search.svg";
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

  return (
    <div className="app">
      <h1>MovieCenter </h1>
      <div className="search">
        <input
          placeholder="Enter the Movie"
          value={searchTerm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {Movie?.length > 0 ? (
        <div className="container">
          {Movie.map((movie) => (
            <MovieCard data={movie} />
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
