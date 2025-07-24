import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-container">
          <img src="/logo.png" alt="Logo" className="logo-icon" />
          <img src="/textlogo2.png" alt="Logo" className="logo-text" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-text">MENU</span>
          <span className="hamburger-icon">☰</span>
        </button>
      </div>

      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li
          className={active === "Home" ? "active" : ""}
          onClick={() => {
            setActive("Home");
            setMenuOpen(false);
          }}
        >
          Home
        </li>
        <li className="dropdown">
          <span
            className={active === "About" ? "active" : ""}
            onClick={() => {
              setActive("About");
              setDropdownOpen(!dropdownOpen); // toggle dropdown
            }}
          >
            About ▾
          </span>
          <ul className="dropdown-menu">
            <li onClick={() => setMenuOpen(false)}>Team</li>
            <li onClick={() => setMenuOpen(false)}>Achievements</li>
            <li onClick={() => setMenuOpen(false)}>Contact</li>
          </ul>
        </li>
        <li className="dropdown">
          <span
            className={active === "Projects" ? "active" : ""}
            onClick={() => {
              setActive("Projects");
              setDropdownOpen(!dropdownOpen);
            }}
          >
            Projects ▾
          </span>
          <ul className="dropdown-menu">
            <li onClick={() => setMenuOpen(false)}>TAB</li>
            <li onClick={() => setMenuOpen(false)}>Induction</li>
            <li onClick={() => setMenuOpen(false)}>Post Induction</li>
          </ul>
        </li>
        <li
          className={active === "Blogs" ? "active" : ""}
          onClick={() => {
            setActive("Blogs");
            setMenuOpen(false);
          }}
        >
          Blogs
        </li>
        <li
          className={active === "Events" ? "active" : ""}
          onClick={() => {
            setActive("Events");
            setMenuOpen(false);
          }}
        >
          Events
        </li>
      </ul>
      <div className={`navbar-actions ${menuOpen ? "open" : ""}`}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
