import Hero from "../hero/hero";
import Projets from "../Projets/projets";
import React from "react";
import Footer from "../Fixe/Footer/footer";
import Navbar from "../Fixe/navbar/navbar";

function PageIndex() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Projets />
        <Footer />
      </div>
    </>
  );
}

export default PageIndex;
