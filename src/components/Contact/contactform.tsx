import { IoIosSend } from "react-icons/io";
import React from "react";

function ContactForm() {
  return (
    <div className="max-w-screen-xl flex justify-center items-center px-4 md:px-8 lg:px-16 xl:px-32 mx-auto h-[78vh] w-auto">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 bg-stone-50 text-gray-900 rounded-lg shadow-lg">
        <div className="p-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Contactez-nous
          </h2>
          <div className="text-gray-700">
            Nous nous engageons à répondre en moins de{" "}
            <span className="underline">48 heures</span>.
          </div>
        </div>
        <div className="p-8">
          <div className="mb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Nom / Société
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Adresse mail
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mb-4">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div>
            <a
              className="inline-flex font-mono font-bold justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 "
              href="#"
            >
              Envoyer
              <IoIosSend size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
