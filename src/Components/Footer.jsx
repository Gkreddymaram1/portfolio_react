import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 My Website. All rights reserved.</p>

      <div className="social-icons">
        {/* GitHub */}
        <a
          href="https://github.com/Gkreddymaram1"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/gopalakrishnareddy-maram-0558bb290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919121943891"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        {/* Phone Call */}
        <a href="tel:9121943891">
          <FaPhoneAlt />
        </a>
      </div>
    </footer>
  );
}

