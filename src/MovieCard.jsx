import React from "react";

const MovieCard = ({ data }) => {
  return (
    <div className="movie group relative w-[310px] h-[460px] m-6 rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-[0px_30px_18px_-8px_rgba(0,0,0,0.1)] hover:scale-105">
      <div className="absolute p-4 opacity-0 text-orange-200 group-hover:opacity-100">
        <p>{data.Year}</p>
      </div>
      <div className="w-full h-full group-hover:opacity-30">
        <img
          alt={`${data.Title} poster`}
          src={
            data.Poster !== "N/A"
              ? data.Poster
              : "https://via.placeholder.com/400"
          }
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-neutral-700 pt-4 px-6 pb-6 group-hover:bg-transparent">
        <span className="uppercase text-xs tracking-[.16em] font-medium text-zinc-100">
          {data.Type}
        </span>
        <h3 className="text-orange-200 mt-1.5 font-bold text-xl">
          {data.Title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
