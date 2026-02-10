// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./Projects.css";

// export default function Projects() {
//   const location = useLocation();

//   useEffect(() => {
//     const id = "projects"; // must match Navbar button and section id
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);
//   return (
//     <div className="projects-container">

//       <h2>My Projects</h2>

//       <ul>

//         <li>
//           <strong>Jireh Architecture Website</strong>
//           <p>
//             A modern and responsive architecture company website built using React JS. 
//             Designed elegant UI sections, smooth navigation, and integrated service pages 
//             with dynamic components. Focused on clean layouts, animations, and user-friendly experience.
//           </p>
//         </li>

//         <li>
//           <strong>Credit Card Fraud Detection System</strong>
//           <p>
//             Machine Learning based fraud analysis project using Python. 
//             Implemented Logistic Regression and Random Forest algorithms 
//             to detect suspicious credit card transactions with high accuracy. 
//             Includes data preprocessing, visualization, and model evaluation.
//           </p>
//         </li>

//         <li>
//           <strong>Personal Portfolio Website</strong>
//           <p>
//             A fully responsive portfolio created using React JS. 
//             Includes Hero section, Skills, Projects, About Me, and Contact form. 
//             Implemented React Router for page navigation and custom components for reusable UI.
//           </p>
//         </li>

//       </ul>

//     </div>
//   )
// }


import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    const id = "projects"; // must match Navbar button and section id
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>Jireh Architecture Website</strong>
          <p>
            A modern and responsive architecture company website built using React JS. 
            Designed elegant UI sections, smooth navigation, and integrated service pages 
            with dynamic components. Focused on clean layouts, animations, and user-friendly experience.
          </p>
        </li>
        <li>
          <strong>Credit Card Fraud Detection System</strong>
          <p>
            Machine Learning based fraud analysis project using Python. 
            Implemented Logistic Regression and Random Forest algorithms 
            to detect suspicious credit card transactions with high accuracy. 
            Includes data preprocessing, visualization, and model evaluation.
          </p>
        </li>
        <li>
          <strong>Personal Portfolio Website</strong>
          <p>
            A fully responsive portfolio created using React JS. 
            Includes Hero section, Skills, Projects, About Me, and Contact form. 
            Implemented React Router for page navigation and custom components for reusable UI.
          </p>
        </li>
      </ul>
    </section>
  );
}
