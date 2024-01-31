import React from 'react';
import './App.css';
import Navbar from "./components/holium/navbar/navbar";
import Hero from "./components/hero/hero";
import Projets from "./components/Projets/projets";
import Contact from "./components/Contact/contact";

function App() {
  return (
      <div className="App">
              <Navbar/>
              <Hero/>
              <Projets/>
              <Contact />
      </div>
  );
}

export default App;
