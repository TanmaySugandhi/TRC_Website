import React from "react";
import { Link } from "react-router-dom";
import "../components/Project.css";

function Post() {
  return (
    <>
      <div className="header">
        <h1 className="head-title">Post Induction Projects</h1>
      </div>
      <div className="project-section">
        <div className="project-cards">
          <div className="card-container">
            <Link to="/post/2023" className="event-card">
              <img src="/assets/Pix.jpg" alt="Induction 2022" />
              <div className="card-caption">POST INDUCTION'23</div>
            </Link>
            <Link to="/post/2022" className="event-card">
              <img src="/assets/Pix.jpg" alt="Induction 2022" />
              <div className="card-caption">POST INDUCTION'22</div>
            </Link>
            <Link to="/post/2021" className="event-card">
              <img src="/assets/Pix.jpg" alt="Induction 2021" />
              <div className="card-caption">POST INDUCTION'21</div>
            </Link>
            <Link to="/post/2019" className="event-card">
              <img src="/assets/Pix.jpg" alt="Induction 2019" />
              <div className="card-caption">POST INDUCTION'19</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
