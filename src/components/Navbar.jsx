import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const hoverTimeout = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (name) => {
    setActive(name);
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(hoverTimeout.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
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
        <li className={active === "Home" ? "active" : ""}>
          <Link className="link" to="/" onClick={() => handleLinkClick("Home")}>Home</Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("About")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={active === "About" ? "active" : ""}>
            About ▾
          </span>
          <ul className={`dropdown-menu ${openDropdown === "About" ? "show" : ""}`}>
            <li>
              <Link className="link" to="/team" onClick={() => handleLinkClick("About")}>Team</Link>
            </li>
            <li>
              <Link className="link" to="/achievement" onClick={() => handleLinkClick("About")}>Achievement</Link>
            </li>
            <li>
              <Link className="link" to="/about" onClick={() => handleLinkClick("About")}>About Club</Link>
            </li>
            <li>
              <Link className="link" to="/contact" onClick={() => handleLinkClick("About")}>Contact</Link>
            </li>
          </ul>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("Projects")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={active === "Projects" ? "active" : ""}>
            Projects ▾
          </span>
          <ul className={`dropdown-menu ${openDropdown === "Projects" ? "show" : ""}`}>
            <li>
              <Link className="link" to="/tab" onClick={() => handleLinkClick("Projects")}>TAB</Link>
            </li>
            <li>
              <Link className="link" to="/induction" onClick={() => handleLinkClick("Projects")}>Induction</Link>
            </li>
            <li>
              <Link className="link" to="/post" onClick={() => handleLinkClick("Projects")}>Post Induction</Link>
            </li>
          </ul>
        </li>
                <li
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("Blogs")}
          onMouseLeave={handleMouseLeave}
        >
          <span className={active === "Blogs" ? "active" : ""}>
            Blogs ▾
          </span>
          <ul className={`dropdown-menu ${openDropdown === "Blogs" ? "show" : ""}`}>
            <li>
              <Link className="link" to="/blogs" onClick={() => handleLinkClick("Blogs")}>TAB</Link>
            </li>
            <li>
              <Link className="link" to="/robotics" onClick={() => handleLinkClick("Blogs")}>Robotics</Link>
            </li>
          </ul>
        </li>

        <li className={active === "Events" ? "active" : ""}>
          <Link className="link" to="/events" onClick={() => handleLinkClick("Events")}>Events</Link>
        </li>
      </ul>

      <div className={`navbar-actions ${menuOpen ? "open" : ""}`}>
        <a href="https://m.facebook.com/theroboticsclubsnist/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.youtube.com/channel/UC9BkjBScr7A67vb8Ruq3cbg" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/theroboticsclubsnist" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/the-robotics-club-snist/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
