import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Projets() {
  const { t } = useTranslation();

  const [selectedProjet, setSelectedProjet] = useState(null);

  const projetsData = [
    {
      title: t("index.project-type.E-commerce"),
      image: "/ecommerce.jpg",
    },
    {
      title: t("index.project-type.Vitrine"),
      image: "/vitrine.jpg",
    },
    {
      title: t("index.project-type.Application-Interne"),
      image: "/appinterne.jpg",
    },
    {
      title: t("index.project-type.SaaS"),
      image: "/saas.jpg",
    },
  ];
  const handleProjetClick = (index: any) => {
    if (selectedProjet === index) {
      setSelectedProjet(null); // Si oui, referme le contenu déroulant
    } else {
      setSelectedProjet(index); // Sinon, définis l'index du projet sélectionné
    }
  };

  return (
    <div className="py-8 bg-stone-50 bg-opacity-75 flex flex-col overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 relative">
        {projetsData.map((projet, index) => (
          <div
            key={index}
            className="max-w-sm h-60 w-full mx-auto sm:mx-0 rounded-md overflow-hidden shadow-lg"
            onClick={() => handleProjetClick(index)} // Appelle handleProjetClick lorsqu'une carte est cliquée
          >
            {/* Image de la carte */}
            <div
              className="group h-full bg-cover bg-center relative p-4 cursor-pointer"
              style={{
                backgroundImage: `url("${projet.image}")`,
              }}
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              {/* Superposition semi-transparente pour assombrir */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-transparent to-black opacity-45"></div>
              {/* Contenu en bas de la carte */}

              <div className="flex flex-col justify-end h-full relative z-10">
                <div className="flex items-center justify-start">
                  <h2 className="text-white text-xl font-bold mb-2">
                    {projet.title}
                  </h2>
                </div>

                <div className="flex items-center justify-end">
                  <span className="text-white mr-2">
                    {t("index.project-type.discover")}
                  </span>
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
        ))}
      </div>
      {selectedProjet !== null && (
        <div className="fixed top-2/3 inset-0 bg-white backdrop-filter backdrop-blur-lg bg-opacity-90 z-50 overflow-y-auto flex items-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">
              {projetsData[selectedProjet].title}
            </h2>
            {/* Contenu de la div déroulante */}
            {/* Remplacez ce contenu par celui de votre div déroulante */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet lectus vel nunc congue, vel gravida lacus gravida. Duis
              tempus metus in neque vestibulum, vel faucibus urna varius. Nullam
              fermentum quam id tincidunt suscipit. Nam pharetra tellus vel ex
              mollis, vel pretium libero ultrices.
            </p>
            <button
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 mt-4"
              onClick={() => setSelectedProjet(null)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projets;
