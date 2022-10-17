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
    <div className="app p-16 flex justify-center items-center flex-col">
      <h1 className="text-green-200 text-5xl tracking-wide font-bold">
        MovieCenter
      </h1>
      <form
        className="search bg-neutral-900 rounded-full py-6 px-8 w-7/12 m-12 flex items-center content-center drop-shadow-xl"
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder="Enter the Movie"
          value={searchTerm}
          onChange={(e) => setSearchterm(e.target.value)}
          className="flex-1 text-xl font-medium outline-none bg-neutral-900 text-neutral-400"
        />
        <button className="cursor-pointer text-white">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <circle cx={10} cy={10} r={7}></circle>
   <line x1={21} y1={21} x2={15} y2={15}></line>
</svg>
        </button>
      </form>
      {Movie?.length > 0 ? (
        <div className="container mt-6 flex justify-center items-center flex-wrap">
          {Movie.map((movie, idx) => (
            <MovieCard data={movie} key={idx + ""} />
          ))}
        </div>
      ) : (
        <div className="empty mt-6 text-orange-200 text-2xl">
          <h2>No Movie Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
