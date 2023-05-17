import React from "react";
import "./reusable.css";

function ReUsable({ title, poster_path, overview }) {
  const Img_API = "https://image.tmdb.org/t/p/w1280";

  const defaultImg =
    "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";

  return (
    <div className="contain">
      <div className="post">
        <img
          className="image"
          loading="lazy"
          src={poster_path ? Img_API + poster_path : defaultImg}
          alt={title}
        />

        <div className="movie-info">
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default ReUsable;
