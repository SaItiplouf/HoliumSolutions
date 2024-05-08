import { FR, GB } from "country-flag-icons/react/3x2";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
  const { i18n } = useTranslation();

  const [primaryLanguage, setPrimaryLanguage] = useState(i18n.language);

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
    <details className={`relative inline-block text-left mr-4`}>
      <summary className="cursor-pointer slider-fix inline-flex justify-center items-center w-full p-2 text-gray-700 hover:bg-gray-200 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
  );
}
