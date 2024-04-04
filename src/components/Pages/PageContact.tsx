import React from "react";
import Footer from "../Fixe/Footer/footer";
import Navbar from "../Fixe/navbar/navbar";
import ContactForm from "../Contact/contactform";
import { ToastContainer } from "react-toastify";

function PageContact() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ToastContainer />
        <Navbar />
        <div className="flex-1 flex flex-col">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageContact;
