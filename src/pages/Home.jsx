import React from "react";
import { Banner } from "../components/Banner";
import { Rows } from "../components/Rows";
import { requests } from "../constant/Tmdb";

export const Home = () => {
  return (
    <>
      <Banner />
      <Rows title={"originals"} url={requests?.requestTrending} />
      <Rows title={"popular"} url={requests?.requestPopular} />
      <Rows title={"top rated"} url={requests?.requestTopRated} />
      <Rows title={"horror"} url={requests?.requestHorror} />
      <Rows title={"upcoming"} url={requests?.requestUpcoming} />
    </>
  );
};
