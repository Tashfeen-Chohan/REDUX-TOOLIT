import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center px-2 py-1 bg-slate-800 text-white mb-3">

        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="md:pl-28 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* LOGO */}
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
              {/* <img src={Logo} alt="Logo" width={50} /> */}
              <span className="text-xl italic md:text-2xl">Redux Toolit</span>
            </a>

            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? "X": "O"}
            </button>
          </div>

          {/* NAV LIKS */}
          <div
            className={
              "lg:flex flex-grow items-center md:pr-28" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li  className="px-3 py-2 flex items-center text-xs md:text-lg uppercase  leading-snug text-white hover:opacity-75">
                <Link to={"/"}>HOME</Link>
              </li>
              <li className="px-3 py-2 flex items-center text-xs md:text-lg uppercase leading-snug text-white hover:opacity-75">
                CREATE
              </li>
              <li className="px-3 py-2 flex items-center text-xs md:text-lg uppercase leading-snug text-white hover:opacity-75">
                POSTS
              </li>
            </ul>
            
          </div>

        </div>
      </nav>
    </>
  );
}