import React from "react";
import Footer from "../Fixe/Footer/footer";
import Navbar from "../Fixe/navbar/navbar";
import ContactForm from "../Contact/contactform";
import { ToastContainer } from "react-toastify";

function PageContact() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default PageContact;
