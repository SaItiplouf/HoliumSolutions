import Hero from "../hero/hero";
import Projets from "../Projets/projets";
import React from "react";
import Footer from "../Fixe/Footer/footer";
import Navbar from "../Fixe/navbar/navbar";

function PageIndex() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="component-height">
          <Hero />
          <Projets />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageIndex;
