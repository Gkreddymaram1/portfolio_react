// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./User.css";

// export default function User() {
//   const location = useLocation();

//   useEffect(() => {
//     const id = "User";
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   return (
//     <div className="user-container">
//       <div className="user-text hover-border">
//         <h1 className="user-welcome">Welcome, {name ? name : "User"}!</h1>
//         <p className="user-description">
//           This page displays your user information in a simple and interactive way.
//           You can view your profile, update your details, and explore personalized features.
//           Our goal is to make your experience smooth, fast, and user-friendly.
//           Thank you for being a part of our application!
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./User.css";

export default function User() {
  const location = useLocation();

  useEffect(() => {
    const id = "user"; // must match Navbar button and section id
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="user" className="user-container">
      <div className="user-text hover-border">
        <h1 className="user-welcome">Welcome, User!</h1>
        <p className="user-description">
          This page displays your user information in a simple and interactive way.
          You can view your profile, update your details, and explore personalized features.
          Our goal is to make your experience smooth, fast, and user-friendly.
          Thank you for being a part of our application!
        </p>
      </div>
    </section>
  );
}
