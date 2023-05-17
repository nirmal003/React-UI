import React, { useState } from "react";
import * as FcIcons from "react-icons/fc";

import "./slidebar.css";

function SlideBar() {
  const arr = [
    {
      Image: "https://image.tmdb.org/t/p/w1280/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    },
    {
      Image: "https://image.tmdb.org/t/p/w1280/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    },

    {
      Image: "https://image.tmdb.org/t/p/w1280/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg",
    },
  ];

  const [state, setState] = useState(0);

  const Img_API = "https://image.tmdb.org/t/p/w1280";
  const defaultImg =
    "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";

  const handleDec = () => {
    if (state === 0) {
      setState(arr.length - 1);
    } else {
      setState(state - 1);
    }
  };
  const handleInc = () => {
    if (state === arr.length - 1) {
      setState(state - (arr.length - 1));
    } else {
      setState(state + 1);
    }
  };

  return (
    <div className="carousel">
      <FcIcons.FcPrevious className="previous" onClick={handleDec} />
      <FcIcons.FcNext className="next" onClick={handleInc} />
      <div className="slide">
        <img className="sliderimg" loading="lazy" src={arr[state].Image} />
      </div>
    </div>
  );
}

export default SlideBar;
