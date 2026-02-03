// import React from 'react'
// import Profile from '../img/profile.jpeg';
// import "./HeroSection.css";

// export default function HeroSection() {
//   return (


//     <section >
//     <div >
//         <div>
//             <p >Hey, i'm Gopi</p>
//             <h1 >
//                 <span >Full stack</span>{" "}
//                 <br />
//                 Developer
//             </h1>
//             <p >I'm Gopi looking for a Frontend developer Job   
//                 <br/>
//                 i had rectently completed by  btech in the steam with cse
//             </p>
//         </div>
//         <button className='btn' >Get in Touch</button>
//     </div>

//     <div  className='img'>
//         <img src={Profile} alt="Profile"  width={200} height={220}  />
        
//     </div>
//     </section>
//   )
// }   



import React from 'react';
import Profile from '../img/profile.png';
import "./Herosection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        {/* <p>Hey, I'm Gopi</p>
        <h1>
          <span>Full Stack</span> <br />
          Developer
        </h1>
        <p >
          I'm Gopi looking for a Frontend developer Job   
          <br />
          I recently completed my BTech in CSE
        </p> */}
        <div style={{ color: 'white', textAlign: 'center' }}>
  <p>Hey, I'm Gopi</p>
  <h1>
    <span>Full Stack</span> <br />
    Developer
  </h1>
  <p>
    I'm Gopi looking for a Frontend developer Job <br />
    I recently completed my BTech in CSE
  </p>
</div>

        {/* Buttons */}
        <div className="hero-buttons">
          {/* Get in Touch - opens email with pre-filled message */}
          <a
            href="mailto:yourmail@example.com?subject=Job%20Inquiry&body=Hello%20Gopi,%20I%20am%20interested%20in%20contacting%20you."
            className="btn"
          >
            Get in Touch
          </a>

          {/* View Resume - opens PDF in new tab */}
          <a
            href="./img/resume.pdf"   // <-- Place your resume in public folder
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className='img'>
        <img src={Profile} alt="Profile" width={180} height={180} />
      </div>
    </section>
  );
}
