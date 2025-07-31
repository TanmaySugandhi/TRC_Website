import React from "react";
import { Link } from "react-router-dom";

function Events() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Upcomming Events</h1>
      </div>
            <div className="project-section">
        <div className="project-cards">
          <div className="card-container">
            <Link to="/events" className="event-card">
              <img src="/assets/Pix.jpg" alt="Induction 2022" />
              <div className="card-caption">POST INDUCTION'25</div>
            </Link>
            <Link to="/events" className="event-card">
              <img src="/assets/rg1.png" alt="Induction 2022" />
              <div className="card-caption">Roboveda</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
