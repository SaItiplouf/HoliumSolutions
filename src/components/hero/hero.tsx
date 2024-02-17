import React from "react";
import { IoIosSend } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const copy = async () => {
    await navigator.clipboard.writeText("contact@holiumsolutions.fr");
  };

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2dark">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
            Holium
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Solutions
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 ">{t("hero.bio")}</p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
          <a className="inline-flex font-mono font-bold justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 ">
            Nos projets
            <IoIosSend size={18} />
          </a>
          <button
            type="button"
            className="relative group p-2 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
            onClick={copy}
            data-tooltip-id="my-tooltip-click"
          >
            contact@holiumsolutions.fr
            <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 ">
              <svg
                className="flex-shrink-0 w-4 h-4 group-hover:rotate-6 transition"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              </svg>
            </span>
          </button>
          <Tooltip id="my-tooltip-click" content="Copié !" openOnClick={true} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
