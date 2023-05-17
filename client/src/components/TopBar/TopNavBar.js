import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import search from "../../Assets/search-solid.svg";
import "./topnavbar.css";

function TopNavBar() {
  const [Icon, setIcon] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIcon(true);
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div>
        <div className="icon">PRO OTT</div>
      </div>
      <div className={Icon ? "menuitem open" : "menuitem close"}>
        {Icon ? (
          <>
            <span className="menu">Home</span>
            <span className="menu">Shows</span>
            <span className="menu">Movie</span>
            <span className="menu">Comedy</span>
            <span className="menu">News</span>
          </>
        ) : (
          <>
            <span onClick={() => setIcon(true)} className="menu">
              Home
            </span>
            <span onClick={() => setIcon(true)} className="menu">
              Shows
            </span>
            <span onClick={() => setIcon(true)} className="menu">
              Movie
            </span>
            <span onClick={() => setIcon(true)} className="menu">
              Comedy
            </span>
            <span onClick={() => setIcon(true)} className="menu">
              News
            </span>
            <span onClick={() => setIcon(true)} className="menu">
              Subscribe
            </span>
            <span onClick={handleClick} className="menu">
              Login
            </span>
          </>
        )}
      </div>
      <div>
        <form>
          <input type="text" placeholder="Search Bar" className="searchbar" />
          <img src={search} alt="search" width="16" className="searchicon" />
        </form>
      </div>
      <div className="lastmenu">
        <span className="menu">Subscribe</span>
        <span className="menu" onClick={handleClick}>
          Login
        </span>
      </div>
      {Icon ? (
        <div>
          <span className="logo" onClick={() => setIcon(false)}>
            <FaIcons.FaBars />
          </span>
        </div>
      ) : (
        <div>
          <span className="logo" onClick={() => setIcon(true)}>
            <AiIcons.AiOutlineClose />
          </span>
        </div>
      )}
      {isOpen && (
        <div className="overlay">
          <div className="model">
            <form className="form">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                required="required"
              />
              <br />
              <input
                type="password"
                name="fullName"
                placeholder="Enter your password..."
                required="required"
              />
              <br />
              <button onClick={() => setIsOpen(false)} className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopNavBar;
