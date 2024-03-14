import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-white w-full border-t border-gray-200 h-28">
      <div className="container flex flex-wrap items-center justify-between px-6 py-8 mx-auto">
        <div className="font-love-ya flex items-center cursor-pointer hover:scale-95 transition-transform">
          <p className="font-mono text-gray-800 text-sm md:text-md lg:text-lg">
            Contactez-nous
          </p>
          <img
            className="w-10 ml-2"
            src="/arrowtop.svg"
            alt="Flèche vers le haut"
          />
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="group relative hover:scale-105 cursor-pointer flex justify-center items-center">
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            <FaInstagram className="h-full w-6" />
          </div>
          <div className="group relative hover:scale-105 cursor-pointer flex justify-center items-center">
            <div className="absolute opacity-0 top-0 pointer-events-none -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white group-hover:animate-shine" />
            <FaLinkedin className="h-full w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
