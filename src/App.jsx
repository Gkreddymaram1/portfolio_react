





import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Layout components
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/Herosection.jsx";
import Footer from "./components/Footer.jsx";

// Pages / Sections
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import User from "./components/User.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/User" element={<User />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="*" element={<h1>Not Found data</h1>} />
      </Routes>

      <Footer />
    </>
  );
}
