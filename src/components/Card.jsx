import React from "react";
import { imgUrl } from "../constant/Tmdb";

export const Card = ({ items, fn }) => {
  return (
    <>
      <img
        onClick={() => fn(items?.id)}
        src={`${imgUrl}w500/${items?.backdrop_path}`}
        alt={items?.title}
        className="w-full h-auto block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center text-center w-full h-full">
          {items?.title}
        </p>
      </div>
    </>
  );
};
