// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import "./App.css";

// // Layout components
// import Navbar from "./Components/Navbar.jsx";
// import HeroSection from "./Components/Herosection.jsx";
// import Footer from "./Components/Footer.jsx";

// // Pages / Sections
// import Home from "./Components/Home.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import User from "./Components/User.jsx";
// import Skills from "./Components/Skills.jsx";
// import Projects from "./Components/Projects.jsx";

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />

//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/User" element={<User />} />
//         <Route path="/Skills" element={<Skills />} />
//         <Route path="/Projects" element={<Projects />} />
//         <Route path="*" element={<h1>Not Found data</h1>} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }


import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Layout components
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/Herosection.jsx";
import Footer from "./Components/Footer.jsx";

// Pages / Sections
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import User from "./Components/User.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";

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

