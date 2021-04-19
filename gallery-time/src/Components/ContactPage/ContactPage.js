import React from "react";
import Header from "../Header/Header";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <ContactCard />
      </div>
    </>
  )
}

export default ContactPage;
