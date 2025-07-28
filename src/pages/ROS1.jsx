import React from "react";
import "../components/Blogs2.css";
import BackButton from "../components/BackButton";

function ROS1() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Robot Operating System</h1>
      </div>
      <div className="blog-outside">
      <div className="blog-item">
        <div className="blog-title">
          <h3>Introduction and Installation of Robot Operating System (ROS)</h3>
        </div>
        <div className="blog-meta">
          <p>
            By <b>Nobel Chowdary</b>
          </p>
        </div>
        <div className="blog-text">
          <p style={{ textAlign: "left" }}>
            <video controls style={{ width: "100%" }}>
              <source src="../videos/ROS TRC VID 1.mp4" type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
              Your browser does not support HTML video.
            </video>
            <br />
            <b>Title</b> :<br />
            Introduction and Installation of Robot Operating System (ROS)
            <br />
            <br />
            <b>Description</b> :<br />
            Hello friends, this is the very first video on Robot Operating
            System (ROS). In this video, complete introduction about the ROS and
            the few doubts people get when they get to know about the ROS and
            Installation of the Ubuntu Operating system along with the
            installation of ROS Kinetic is explained.
            <br />
            <br />
            <b>
              <u>Important Links:</u>
            </b>
            <br />
            <b>Ubuntu Installation</b> ---&gt;{" "}
            <a
              href="https://youtu.be/k7vns-5FFmM"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://youtu.be/k7vns-5FFmM
            </a>
            <br />
            <b>ROS Kinetic Installation</b> ---&gt;{" "}
            <a
              href="https://roboticelectronics.in/ros-installation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://roboticelectronics.in/ros-installation/
            </a>
            <br />
            <b>ROS Documentation</b> ---&gt;{" "}
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

export default ROS1;
