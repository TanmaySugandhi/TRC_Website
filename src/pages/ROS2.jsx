import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function ROS2() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Robot Operating System</h1>
      </div>
      <div className="blog-outside">
        <div className="blog-item">
          <div className="blog-title">
            <h3>ROS Topic &amp; Turtlebot | ROS Ecosystem</h3>
          </div>
          <div className="blog-meta">
            <p>
              By <b>Nobel Chowdary</b> TAB executive for Designing
            </p>
          </div>
          <div className="blog-text">
            <p style={{ textAlign: "left" }}>
              <video controls style={{ width: "100%" }}>
                <source
                  src="../videos/2 ROS TOPIC TURTLEBOT TRC.mp4"
                  type="video/mp4"
                />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
              <br />
              <b>Title:</b> ROS Topic &amp; Turtlebot | ROS Ecosystem
              <br />
              <br />
              <b>Description</b>
              <br />
              In this video the communication protocol of ROS is explained. ROS
              Publisher and Subscriber along with the ROS Topic is briefly
              explained. ROS Simulation of Turtlebot using teleop is explained
              by execution. The concept completely related to the ROS Topic
              along with the example is discussed briefly.
              <br />
              <br />
              <b>
                <u>Important Links</u>
              </b>
              <br />
              <b>ROS Tutorials</b> ----&gt;{" "}
              <a
                href="https://roboticelectronics.in/tech-blog/robotic-operating-system/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://roboticelectronics.in/tech-blog/robotic-operating-system/
              </a>
              <br />
              <b>ROS Documentation</b> ----&gt;{" "}
              <a
                href="https://www.ros.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.ros.org/
              </a>
              <br />
            </p>
          </div>
        </div>
        <BackButton />
      </div>
    </>
  );
}

export default ROS2;
