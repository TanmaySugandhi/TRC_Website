import React from "react";
import "../components/Styles/ContactUs.css";

function Contact() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Contact Us</h1>
      </div>
      <div className="back">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <p>
                <strong>Address:</strong> SNIST Campus, Hyderabad, India
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Email:</strong> roboticsclub@snist.edu.in
              </p>

              <div className="social-icons">
                <a href="https://www.facebook.com/theroboticsclubsnist/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC9BkjBScr7A67vb8Ruq3cbg">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/the-robotics-club-snist/posts/?feedView=all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/theroboticsclubsnist">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
