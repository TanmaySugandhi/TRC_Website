import React from "react";
import "./Revents.css"
function Revents() {
  return (
    <>
    <section class="events-section">
  <h2>Recent Events & Workshops</h2>
  <div class="events-grid">
    <div class="event-card">
      <img src="/images/rv24.jpg" alt="Event 1" />
      <div class="event-info">
        <h3>ROBOVEDA 2024</h3>
        <p>Our flagship RoboWars event held during Roboveda 2024 saw over 30 teams battle it out in intense one-on-one bot wars.</p>
        <span class="event-date">March 10, 2024</span>
      </div>
    </div>
    <div class="event-card">
      <img src="/images/workshop1.jpg" alt="Workshop 1" />
      <div class="event-info">
        <h3>Drone Workshop</h3>
        <p>Hands-on drone building and flight workshop, introducing members to UAV tech and applications in real world.</p>
        <span class="event-date">December 2, 2022</span>
      </div>
    </div>
    <div class="event-card">
      <img src="/images/workshop2.jpg" alt="Workshop 2" />
      <div class="event-info">
        <h3>Drone Workshop</h3>
        <p>Hands-on drone building and flight workshop, introducing members to UAV tech and applications in real world.</p>
        <span class="event-date">December 2, 2022</span>
      </div>
    </div>
  </div>
  </section>
    </>
  )
}

export default Revents

