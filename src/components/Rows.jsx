import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Card } from "./Card";
import YouTube from "react-youtube";
import { key } from "../constant/Tmdb";

export const Rows = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [videoId, setVideoId] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (vId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${vId}/videos?api_key=${key}&language=en-US`
      )
      .then((res) => {
        if (res.data.length !== 0) {
          setVideoId(res.data.results[0]);
        } else {
          console.log("Array Empty");
        }
      });
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden text-black"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-none relative group"
        >
          {movies.map((items, key) => {
            return (
              <div
                key={key}
                onClick={() => handleMovie(items?.id)}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 text-white "
              >
                <Card items={items} />
              </div>
            );
          })}
          {videoId && <YouTube  videoId={videoId?.key} opts={opts} />}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden text-black"
        />
      </div>
    </>
  );
};
