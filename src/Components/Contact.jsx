import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const location = useLocation();
//commented
  useEffect(() => {
    const id = "contacts"; // must match Navbar button
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="contacts" className="contact-page">
      <form className="contact-form">
        <h2>Contact Form</h2>

        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}







