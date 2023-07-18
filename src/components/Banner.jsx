import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { movieBaseUrl, requests } from "../constant/Tmdb";

export const Banner = () => {
  const [movie, setMovies] = useState([]);

  let randomMovie = movie[Math.floor(Math.random() * movie.length)];

  useLayoutEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute bg-gradient-to-tr from-black w-full h-[550px]"></div>
      <div className="w-full h-full">
        <img
          className="min-w-[340px] w-full h-full object-cover"
          src={`${movieBaseUrl}${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute flex-col w-full top-[55%] md:top-[34%] p-4 flex gap-2 md:p-8">
          <h1 className="text-3xl md:text-5xl">{randomMovie?.title}</h1>
          <div className="flex gap-2 md:p-8">
            <button className="border capitalize rounded-sm bg-gray-300 text-black py-2 px-4">
              play
            </button>
            <button className="border capitalize text-white py-2 px-4">
              watch later
            </button>
          </div>
          <h2 className="text-sm text-gray-400">
            Realase date : {randomMovie?.release_date}
          </h2>
          <p className="text-sm text-gray-400 hidden md:block md:max-w-[67%]">
            {truncateString(randomMovie?.overview,100)}
          </p>
        </div>
      </div>
    </div>
  );
};
