import React, { useEffect, useState } from "react";
import ReUsable from "./ReUsable/ReUsable";
import SlideBar from "./SlideBar/SlideBar";
import "./mainbar.css";

function MainBar() {
  const [movies, setMovies] = useState([]);

  const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${1}`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="mainbar">
      <SlideBar />
      <>
        <div className="category">Recommended for you</div>
        <div className="fixed">
          <div className="container">
            {movies?.slice(1, 11).map((movie) => (
              <ReUsable key={movie.id} {...movie} movie={movie} />
            ))}
          </div>
        </div>
        <div className="category">Animated Adventures</div>
        <div className="fixed">
          <div className="container">
            {movies?.slice(10, 20).map((movie) => (
              <ReUsable key={movie.id} {...movie} movie={movie} />
            ))}
          </div>
        </div>
        <div className="category">Popular Shows</div>
        <div className="fixed">
          <div className="container">
            {movies?.slice(6, 16).map((movie) => (
              <ReUsable key={movie.id} {...movie} movie={movie} />
            ))}
          </div>
        </div>
        <div className="category">New & Upcoming</div>
        <div className="fixed">
          <div className="container">
            {movies?.slice(4, 13).map((movie) => (
              <ReUsable key={movie.id} {...movie} movie={movie} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default MainBar;
