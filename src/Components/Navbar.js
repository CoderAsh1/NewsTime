import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Resources/favicon-32x32.png";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      w-full
      flex flex-wrap
      justify-between
      py-4
      bg-gray-800
      text-white
      hover:text-gray-700
      

      shadow-lg
      navbar navbar-expand-lg navbar-light
      "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <Link to="/" className="lgog">
          <h2 className="text-center text-orange-400 font-bold text-xl">
            <img src={Logo} alt="" style={{ display: "inline" }} />
            News<span className="text-orange-600">Time</span>
          </h2>
        </Link>

        <button
          className="
    navbar-toggler
    text-white
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <pathtext-black
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></pathtext-black>
          </svg>
        </button>
        <div
          className="hamburger pl-8 collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto font-bold">
            <li className=" nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/tech"
              >
                Technology
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/sports"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/music"
              >
                Music
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/gaming"
              >
                Gaming
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/finance"
              >
                Finance
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/science"
              >
                Science
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/energy"
              >
                Energy
              </Link>
            </li>
            <li className="nav-item pr-2">
              <Link
                className="nav-link text-white hover:text-orange-200 
 p-0"
                to="/world"
              >
                world
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// /*
// news, sport,
// tech, world, finance,
// politics, business, economics, entertainment, beauty, travel, music, food, science, gaming, energy/*
