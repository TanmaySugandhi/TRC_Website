import React from "react";
import "./Home2.css";
function Home2() {
  return (
    <>
      <div className="info-cards">
        <div className="card">
          <a className="yellow" href=""><h2>TAB</h2></a>
          <p>Learn about our technical domains</p>
        </div>
        <div className="card highlight">
          <a className="high" href=""><h2>Projects</h2></a>
          <p>View our Projects</p>
        </div>
        <div className="card">
          <a className="yellow" href=""><h2>Team</h2></a>
          <p>Know about our Team</p>
        </div>
      </div>
      <section class="events-section">
        <h1>Gallery</h1>
        <h2>Recent Events</h2>
        <div class="events-grid">
          <div class="event-card">
            <img src="/assets/workshop2.jpg" alt="Workshop 2" />
            <div class="event-info">
              <p>Sreenidhi School</p>
            </div>
          </div>
          <div class="event-card">
            <img src="/assets/rv24.jpg" alt="Event 1" />
            <div class="event-info">
              <p>ROBOVEDA 2024</p>
            </div>
          </div>
          <div class="event-card">
            <img src="/assets/workshop1.jpg" alt="Workshop 1" />
            <div class="event-info">
              <p>Drone Workshop</p>
            </div>
          </div>
          <div class="event-card">
            <img src="/assets/workshop2.jpg" alt="Workshop 2" />
            <div class="event-info">
              <p>IOT Workshop</p>
            </div>
          </div>
        </div>
      </section>
      <section class="events-section">
        <h2>Recent Achivements</h2>
        <div class="events-grid">
          <div class="event-card">
            <img src="/assets/workshop2.jpg" alt="Workshop 2" />
            <div class="event-info">
              <p>Sreenidhi School</p>
            </div>
          </div>
          <div class="event-card">
            <img src="/assets/rv24.jpg" alt="Event 1" />
            <div class="event-info">
              <p>ROBOVEDA 2024</p>
            </div>
          </div>
          <div class="event-card">
            <img src="/assets/workshop1.jpg" alt="Workshop 1" />
            <div class="event-info">
              <p>Drone Workshop</p>
            </div>
          </div>
          <div class="event-card">
            <img src="/assets/workshop2.jpg" alt="Workshop 2" />
            <div class="event-info">
              <p>IOT Workshop</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home2;
