import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./languagePicker";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <div className="navbar h-24 fixed top-0 bg-base-100 shadow-lg rounded-lg p-2 backdrop-filter backdrop-blur-lg bg-opacity-30 z-50">
        <div className="navbar-start">
          <div className="hidden lg:collapse md:h-full w-full px-6">
            <Link to="/" className="h-20 w-20">
              <img
                src="/Holium/Fond%20blanc/Holium-04.svg"
                className="max-w-full max-h-full hover:scale-95 transition-transform"
                alt="motif de fond"
              />
            </Link>
          </div>
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
            {/*<li className="nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg">*/}
            {/*  <Link to="/projets">{t("nav.project")}</Link>*/}
            {/*</li>*/}
            <li className="disabled nav-item font-mono text-gray-800 text-sm md:text-md lg:text-lg">
              <a>{t("nav.project")}</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <LanguagePicker />
        </div>
      </div>
      <div className="bg-base-100 h-24 w-full"></div>
    </>
  );
}
