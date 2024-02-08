import React from "react";

function Projets() {
  return (
    <div className="py-12 bg-stone-50 bg-opacity-75">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8">
        <div className="max-w-sm h-64 w-full mx-auto sm:mx-0 relative rounded-md overflow-hidden shadow-lg">
          <div
            className="group h-full bg-cover bg-center relative p-4 cursor-pointer"
            style={{
              backgroundImage: 'url("/ecommerce.jpg")',
            }}
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            {/* Superposition semi-transparente pour assombrir */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-transparent to-black opacity-45"></div>

            {/* Contenu en bas de la carte */}
            <div className="flex flex-col justify-end h-full relative z-10">
              <div className="flex items-center justify-start">
                <h2 className="text-white text-xl font-bold mb-2">
                  E-commerce
                </h2>
              </div>

              <div className="flex items-center justify-end">
                <span className="text-white mr-2">Découvrir</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm h-64 w-full mx-auto sm:mx-0 relative rounded-md overflow-hidden shadow-lg">
          {/* Image de la carte */}
          <div
            className="group h-full bg-cover bg-center relative p-4 cursor-pointer"
            style={{
              backgroundImage: 'url("/vitrine.jpg")',
            }}
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            {/* Superposition semi-transparente pour assombrir */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-transparent to-black opacity-45"></div>

            {/* Contenu en bas de la carte */}
            <div className="flex flex-col justify-end h-full relative z-10">
              <div className="flex items-center justify-start">
                <h2 className="text-white text-xl font-bold mb-2">
                  Site Vitrine
                </h2>
              </div>

              <div className="flex items-center justify-end">
                <span className="text-white mr-2">Découvrir</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm h-64 w-full mx-auto sm:mx-0 relative rounded-md overflow-hidden shadow-lg">
          {/* Image de la carte */}
          <div
            className="group h-full bg-cover bg-center relative p-4 cursor-pointer"
            style={{
              backgroundImage: 'url("/appinterne.jpg")',
            }}
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            {/* Superposition semi-transparente pour assombrir */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-transparent to-black opacity-45"></div>

            {/* Contenu en bas de la carte */}
            <div className="flex flex-col justify-end h-full relative z-10">
              <div className="flex items-center justify-start">
                <h2 className="text-white text-xl font-bold mb-2">
                  Applications interne
                </h2>
              </div>

              <div className="flex items-center justify-end">
                <span className="text-white mr-2">Découvrir</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm h-64 w-full mx-auto sm:mx-0 relative rounded-md overflow-hidden shadow-lg">
          {/* Image de la carte */}
          <div
            className="group h-full bg-cover bg-center relative p-4 cursor-pointer"
            style={{
              backgroundImage: 'url("/saas.jpg")',
            }}
          >
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            {/* Superposition semi-transparente pour assombrir */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-transparent to-black opacity-45"></div>

            {/* Contenu en bas de la carte */}
            <div className="flex flex-col justify-end h-full relative z-10">
              <div className="flex items-center justify-start">
                <h2 className="text-white text-xl font-bold mb-2">SaaS</h2>
              </div>

              <div className="flex items-center justify-end">
                <span className="text-white mr-2">Découvrir</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projets;
