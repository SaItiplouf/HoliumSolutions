import Navbar from "../holium/navbar/navbar";
import Hero from "../hero/hero";
import Projets from "../Projets/projets";
import Footer from "../Footer/footer";
import React from "react";

function PageIndex() {
    return (
    <>
        <Navbar/>
        <Hero/>
        <Projets/>
        <Footer />
    </>
    )
}
export default PageIndex;