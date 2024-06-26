import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  return (
    <footer
      className={`footer bg-white w-full border-t border-gray-200 h-28 ${isContactPage ? "hidden" : ""} sm:block`}
    >
      <div className="h-full container flex flex-wrap items-center justify-between px-6 py-8 mx-auto">
        <div className="font-love-ya tracking-tight flex items-center cursor-pointer hover:scale-95 transition-transform">
          <p className="font-mono text-gray-800 md:text-lg sm:text-md">
            {t("footer.contact")}
          </p>
          <img
            className="md:w-8 ml-2 w-6"
            src="/arrowtop.svg"
            alt="Flèche vers le haut"
          />
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="group relative hover:scale-105 cursor-pointer flex justify-center items-center">
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            <a
              href="https://www.instagram.com/holiumsolutions/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="h-full w-6" />
            </a>
          </div>
          <div className="group relative hover:scale-105 cursor-pointer flex justify-center items-center">
            <div className="absolute opacity-0 top-0 pointer-events-none -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white group-hover:animate-shine" />
            <a
              href="https://www.linkedin.com/in/marco-ganier-73374b229/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-full w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
