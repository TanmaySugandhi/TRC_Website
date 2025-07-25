import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-map">
          <iframe src="https://maps.google.com/maps?q=The%20Robotics%20Club%20(TRC)%20-%20SNIST,%20The%20Robotics%20Club%20(TRC)%20SNIST,%20Yamnampet,%20Telangana,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
        <div class="footer-social">
          <h3>Follow us on</h3>
          <div class="footer-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div class="footer-bottom">
            <p>
              Original Design by <span>saisuhaskadari</span>
            </p>
            <p>
              Redesigned by <span>Tanmay Sugandhi</span>
            </p>
          <p>
            © <span>The Robotics club - SNIST</span>, All Right Reserved.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
