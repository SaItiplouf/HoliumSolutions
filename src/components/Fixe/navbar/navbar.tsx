import React from "react";
import { Link } from "react-router-dom";
import { FR, US } from "country-flag-icons/react/3x2";

function Navbar() {
  return (
    <div className="navbar fixed bg-base-100 shadow-lg rounded-lg p-2 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="#about">À propos</Link>
              <details>
                <summary>Mail</summary>
                <ul className="p-2">
                  <li>Mail</li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="#projets">Projets</Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <div className="flex justify-center items-center h-20 w-20">
            <img
              src="/Holium/Fond%20blanc/Holium-04.svg"
              className="max-w-full max-h-full"
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg">
            <Link to="/">Acceuil</Link>
          </li>
          <li
            className="nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg"
            tabIndex={0}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg">
            <Link to="/projets">Projets</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <details className="relative inline-block text-left">
          <summary className="inline-flex justify-center items-center w-full p-2 text-gray-700 hover:bg-gray-200 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
            <span className="text-lg">
              <label className="cursor-pointer">
                <input type="radio" name="language" className="hidden" />
                <US title="United States" className="h-5 w-5" />
              </label>
            </span>
          </summary>

          <input
            type="radio"
            id="language"
            name="language"
            className="hidden"
          />

          <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <label
              htmlFor="language"
              className="flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 w-full z-10"
            >
              <FR title="France" className="h-4 w-8" />
            </label>
          </div>
        </details>
      </div>
    </div>
  );
  // return (

  // <div className="navbar bg-base-100">
  //     <div className="navbar-start">
  //         <div className="dropdown">
  //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
  //                      stroke="currentColor">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
  //                           d="M4 6h16M4 12h8m-8 6h16"/>
  //                 </svg>
  //             </div>
  //             <ul tabIndex={0}
  //                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  //                 <li>
  //                     <Link to="/">Acceuil</Link>
  //                 </li>
  //                 <li>
  //                     <Link to="/projets">Projets</Link>
  //                 </li>
  //                 <li>
  //                     <Link to="/contact">Contact</Link>
  //                 </li>
  //             </ul>
  //         </div>
  //         <Link to="/" className="btn btn-ghost text-xl">Holium Solutions</Link>
  //     </div>
  //     <div className="navbar-center hidden lg:flex">
  //         <ul className="menu menu-horizontal px-1">
  //             <li>
  //                 <Link to="/">Acceuil</Link>
  //             </li>
  //             <li>
  //                 <Link to="/projets">Projets</Link>
  //             </li>
  //             <li>
  //                 <Link to="/contact">Contact</Link>
  //             </li>
  //         </ul>
  //     </div>
  //     <div className="navbar-end">
  //     </div>
  // </div>
  // );
}

export default Navbar;
