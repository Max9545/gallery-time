import React from "react";
import "./ContactCard.css";
import aaron from "../../img/aaron.jpg";

const ContactCard = () => {
  return (
    <section className="contact-card" data-cy='contact-card'>
      <article className="profile">
        <img className="profile-pic" src={aaron} alt=" of M.B." />
        <h3>Max Bregman</h3>
        <a className="pro-card" href="https://www.linkedin.com/in/max-bregman-216063203/">Max-Linkedin</a>
        <a className="pro-card" href="https://github.com/Max9545">Max-GitHub</a>
      </article>
      <article className="profile">
        <img className="profile-pic"src={aaron} alt="of A.F." />
        <h3>Aaron Foucheaux</h3>
        <a className="pro-card" href="https://www.linkedin.com/in/aaron-foucheaux-891626207/">Aaron-Linkedin</a>
        <a className="pro-card" href="https://github.com/Afoucheaux">Aaron-GitHub</a>
      </article>
    </section>
  )
}

export default ContactCard;
