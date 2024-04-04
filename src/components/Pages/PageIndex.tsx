import Hero from "../hero/hero";
import Projets from "../Projets/projets";
import React from "react";
import Footer from "../Fixe/Footer/footer";
import Navbar from "../Fixe/navbar/navbar";

function PageIndex() {
  return (
    <>
      <div className="overflow-auto flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Hero />
          <Projets />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageIndex;
