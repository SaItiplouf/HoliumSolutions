import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const [isChecked, setIsChecked] = useState(false);

  const copy = async () => {
    setIsChecked(true);
    await navigator.clipboard.writeText("contact@holiumsolutions.fr");

    setTimeout(() => {
      setIsChecked(false);
    }, 3000);
  };

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2dark">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
            Holium
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              Solutions
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-4xl text-center mx-auto">
          <p className="text-sm xs:text-xs sm:text-base text-gray-600">
            {t("index.hero.bio")}
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center justify-center items-center text-center">
          <button className="h-12 sm:mb-0 inline-flex btn-disabled text-sm xs:text-xs text-gray-100 sm:text-base gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 ">
            <span className="flex items-center justify-center">
              <span className="font-semibold text-gray-100 text-md">
                {t("index.hero.project_button")}
              </span>
              <IoIosSend size={18} className="ml-2 self-center h-full" />
            </span>
          </button>
          <button
            type="button"
            className="ml-0 mt-3 sm:ml-3 sm:mt-0 relative group p-2 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            onClick={copy}
          >
            contact@holiumsolutions.fr
            <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 relative">
              <svg
                className={`flex-shrink-0 w-4 h-4 group-hover:rotate-6 transition`}
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
              <svg
                className={`flex-shrink-0 w-3 h-3 group-hover:rotate-6 absolute top-2 left-2 transition-all ${isChecked ? "opacity-100" : "opacity-0"} duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="lightgreen"
                stroke="currentColor"
                style={{ zIndex: 1 }}
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
