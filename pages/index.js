import React from "react";
import Home from "../components/Home";
import Career from "../components/career";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal"

export default function Index() {
  

  return (
    <>
     <Modal />
      <Home />
      <Career />
      <ContactForm />
    </>
  );
}
