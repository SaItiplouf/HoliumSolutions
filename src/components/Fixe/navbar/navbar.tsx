import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FR, GB } from "country-flag-icons/react/3x2";
import { useTranslation, Trans } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [primaryLanguage, setPrimaryLanguage] = useState("fr");

  const toggleLanguage = (event: any) => {
    event.stopPropagation(); // Empêche l'événement de se propager au composant <details>
    const newLanguage = primaryLanguage === "en" ? "fr" : "en";
    setPrimaryLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    const detailsElement = event.currentTarget.closest("details");
    if (detailsElement) {
      detailsElement.removeAttribute("open");
    }
  };
  return (
    <>
      <div className="navbar fixed top-0 bg-base-100 shadow-lg rounded-lg p-2 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
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
                <Link to="/">{t("nav.home")}</Link>
                <Link to="/contact">{t("nav.contact")}</Link>
              </li>
              <li>
                <Link to="#projets">{t("nav.project")}</Link>
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
              <Link to="/">{t("nav.home")}</Link>
            </li>
            <li
              className="nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg"
              tabIndex={0}
            >
              <Link to="/contact">{t("nav.contact")}</Link>
            </li>
            <li className="nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg">
              <Link to="/projets">{t("nav.project")}</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-4">
          <details className={`relative inline-block text-left`}>
            <summary className="cursor-pointer inline-flex justify-center items-center w-full p-2 text-gray-700 hover:bg-gray-200 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
              <span className="text-lg">
                {primaryLanguage === "en" ? (
                  <GB className="ml-1 h-5 w-5 cursor-pointer" />
                ) : (
                  <FR className="ml-1 h-5 w-5 cursor-pointer" />
                )}
              </span>
            </summary>

            <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="flex justify-center py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 z-10"
                onClick={toggleLanguage} // Passez l'événement ici
              >
                {primaryLanguage === "en" ? (
                  <FR className="h-4 w-8" title="FRANCE" />
                ) : (
                  <GB className="h-4 w-8" title="EN" />
                )}
              </div>
            </div>
          </details>
        </div>
      </div>
      <div className="h-24 w-full"></div>
    </>
  );
}
