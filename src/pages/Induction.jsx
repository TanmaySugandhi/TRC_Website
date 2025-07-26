import React from "react";
import { Link } from "react-router-dom";
import "../components/Project.css";

function Induction() {
  return (
    <>
      <div className="header">
        <h1 className="head-title">Projects</h1>
      </div>
      <div className="project-section">
        <h2 className="project-title">Induction Phase</h2>
        <div className="project-cards">
          <div className="card-container">
            <Link to="/induction/2024" className="event-card">
              <img src="/assets/induction.jpg" alt="Induction 2024" />
              <div className="card-caption">INDUCTION'24</div>
            </Link>
            <Link to="/induction/2023" className="event-card">
              <img src="/assets/induction.jpg" alt="Induction 2023" />
              <div className="card-caption">INDUCTION'23</div>
            </Link>
            <Link to="/induction/2022" className="event-card">
              <img src="/assets/induction.jpg" alt="Induction 2022" />
              <div className="card-caption">INDUCTION'22</div>
            </Link>
            <Link to="/induction/2020" className="event-card">
              <img src="/assets/induction.jpg" alt="Induction 2020" />
              <div className="card-caption">INDUCTION'20</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Induction;
