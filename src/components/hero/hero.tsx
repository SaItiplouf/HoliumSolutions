import React from 'react';
function Hero() {
    return (
        <div
            className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2dark">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                <div className="mt-5 max-w-2xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                        Holium
                        <span
                            className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Solutions</span>
                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-600 ">Holium solutions est une micro-entreprise
                        d'origine Lyonnaise, développant toutes sortes de solutions web destinés à des professionnels,
                        e-commerce, applications de gestions, site vitrine n'ont pas de secret pour nous</p>
                </div>

                <div className="mt-8 gap-3 flex justify-center">
                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 "
                       href="#">
                        Nos projets
                        <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                                stroke="currentColor"/>
                        </svg>
                    </a>
                    <button type="button"
                            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
                        contact@holiumsolutions.fr
                        <span className="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 ">
          <svg className="flex-shrink-0 w-4 h-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg"
               width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="8" height="4"
                                                                                                  x="8" y="2" rx="1"
                                                                                                  ry="1"/><path
              d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
        </span>
                    </button>
                </div>


            </div>
        </div>


    );
}

export default Hero;
