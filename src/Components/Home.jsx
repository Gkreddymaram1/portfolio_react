// import React from "react";
// import "./Home.css";

// export default function Home() {
//   return (
//     <div className="home-container">
//       <div className="home-text">
//        <h1>Hi, I’m Gopal Krishna Reddy</h1>
//         <h2>Passionate Web Developer</h2>
//         <p>
//           I build clean, fast, and user-friendly websites using React, HTML, CSS, and JavaScript.  
//           This portfolio showcases my work, skills, and projects I’ve created.  
//           Explore the pages to know more about my journey, experience, and what I can do for you!
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when this route is active
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <section id="home" className="home-section">
      <div className="home-text">
        <h1>Hi, I’m Gopal Krishna Reddy</h1>
        <h2>Passionate Web Developer</h2>
        <p>
          I build clean, fast, and user-friendly websites using React, HTML, CSS, and JavaScript.
          This portfolio showcases my work, skills, and projects I’ve created.
          Explore the pages to know more about my journey, experience, and what I can do for you!
        </p>
      </div>
    </section>
  );
}


