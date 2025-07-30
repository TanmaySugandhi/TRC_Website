import React from "react";
import "./Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-map">
          <iframe
            src="https://maps.google.com/maps?q=The%20Robotics%20Club%20(TRC)%20-%20SNIST,%20The%20Robotics%20Club%20(TRC)%20SNIST,%20Yamnampet,%20Telangana,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="Google Map Location of The Robotics Club - SNIST"
          />
        </div>
        <div className="footer-social">
          <h3>Follow us on</h3>
          <div className="footer-icons">
            <a href="https://m.facebook.com/theroboticsclubsnist/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC9BkjBScr7A67vb8Ruq3cbg">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://instagram.com/theroboticsclubsnist">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/the-robotics-club-snist/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="footer-bottom">
            <p>Original Design by <span>saisuhaskadari</span></p>
            <p>Redesigned by <span>Tanmay Sugandhi</span></p>
            <p>© <span>The Robotics club - SNIST</span>, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
