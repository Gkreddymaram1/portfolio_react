// import React from 'react'
// import './App.css'
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact'
// import {Routes,Route } from 'react-router-dom'; 
// import Navbar from './components/Navbar';
// import User from './components/user';
// import Footer from './components/Footer'
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import HeroSection from'./components/Herosection';



// export default function App() {
//   return (


// <>


// <Navbar />
// <HeroSection/>


// <Routes>

// <Route path='/home' element={ <Home/>}/>
// <Route path='/About' element={ <About/>}/>
// <Route path='/Contact' element={ <Contact/>}/>
// <Route path='/User' element={ <User/>}/>
// <Route path='/Skills' element={ <Skills/>}/>
//  <Route path='/Projects' element={ <Projects/>}/>
//  <Route path='*' element={<h1>Not Found data</h1>}/>
//    </Routes> 


// <Footer/>
// </>




//   )
// }





import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// Layout components
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Footer from "./components/Footer";

// Pages / Sections
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
