// // import React from "react";
// // import "./About.css";

// // export default function About(){
// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./About.css";

// export default function About() {
//   const location = useLocation();

//   useEffect(() => {
//     // Scroll to top when this route is active
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);


//   return (
//     <div className="about-container">
//       <div className="about-text">
//         <h1>About Me</h1>

//         <p>
//           My name is <strong>Gopal Krishna Reddy</strong>.  
//           I have completed my graduation in <strong>CSE-AI</strong> from <strong>MVR College</strong>.  
//           I am very passionate about coding, designing, and building user-friendly websites.
//         </p>

//         <p>
//           I have good knowledge in <strong>HTML, CSS, JavaScript, React, Python</strong>, and web development tools.  
//           I love learning new technologies and applying them to create clean and fast web applications.
//         </p>

//         <p>
//           Apart from coding, I enjoy designing, problem-solving, and exploring new projects.  
//           I believe in continuous learning and always improving my skills to deliver high-quality work.
//         </p>

//         <p>
//           This portfolio showcases my skills, projects, and journey as a web developer.  
//           Explore the pages to know more about my work and experience.
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    const id = "about";
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          My name is <strong>Gopal Krishna Reddy</strong>.  
          I have completed my graduation in <strong>CSE-AI</strong> from <strong>MVR College</strong>.  
          I am very passionate about coding, designing, and building user-friendly websites.
        </p>

        <p>
          I have good knowledge in <strong>HTML, CSS, JavaScript, React, Python</strong>, and web development tools.  
          I love learning new technologies and applying them to create clean and fast web applications.
        </p>

        <p>
          Apart from coding, I enjoy designing, problem-solving, and exploring new projects.  
          I believe in continuous learning and always improving my skills to deliver high-quality work.
        </p>

        <p>
          This portfolio showcases my skills, projects, and journey as a web developer.  
          Explore the pages to know more about my work and experience.
        </p>
      </div>
    </section>
  );
}
