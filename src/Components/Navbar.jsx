import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll function for same page or different route
  const scrollToSection = (id, route) => {
    if (location.pathname !== route) {
      // navigate to route first
      navigate(route);
      // wait a bit to let route render
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100); // 100ms delay
    } else {
      // same route, scroll directly
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Gopi</div>
      <ul className="navbar-menu">
        <li>
          <button onClick={() => scrollToSection("home", "/home")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about", "/about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects", "/projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("skills", "/skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact", "/contact")}>Contact</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("user", "/user")}>User</button>
        </li>
      </ul>
    </nav>
  );
}





