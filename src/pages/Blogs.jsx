import React from "react";
import { Link } from "react-router-dom";
import "../components/Blogs.css";

const blogSections = [
  {
    domain: "CAD & PCB Design",
    blogs: [
      {
        type: "external",
        title: "Intro to Fusion 360 for Robotics",
        url: "https://tanmay22.hashnode.dev/getting-started-with-cad-a-simple-introduction",
      },
      {
        type: "external",
        title: "3D Printing Basics and UltiMaker",
        url: "https://tanmay22.hashnode.dev/3d-printing-basics-and-using-ultimaker-cura-for-file-preparation",
      },
      {
        type: "external",
        title: "Components of a 3D Printer",
        url: "https://tanmay22.hashnode.dev/mastering-3d-printing-essential-steps-and-key-components-of-a-3d-printer",
      },
      {
        type: "external",
        title: "Settings to Optimize Your 3D Prints",
        url: "https://tanmay22.hashnode.dev/settings-to-optimize-your-3d-prints",
      },
    ],
  },
  {
    domain: "ROS",
    blogs: [
      {
        type: "internal",
        title: "Introduction and Installation of Robot Operating System (ROS)",
        url: "/blogs/ROS1",
      },
      {
        type: "internal",
        title: "ROS Topic & Turtlebot | ROS Ecosystem",
        url: "/blogs/ROS2",
      },
    ],
  },
  {
    domain: "Embedded Systems",
    blogs: [
      {
        type: "internal",
        title: "Introduction to Embeded System",
        url: "/blogs/Embedded1",
      },
      {
        type: "internal",
        title: "LED BLINKING USING STM32F407 WITH ST32CUBEIDE",
        url: "/blogs/Embedded2",
      },
      {
        type: "internal",
        title: "ST-Link Driver Installation",
        url: "/blogs/Embedded3",
      },
    ],
  },
  {
    domain: "IoT",
    blogs: [
      {
        type: "external",
        title: "Introduction to IOT",
        url: "/assets/pdfs/iot.pdf",
      },
      {
        type: "internal",
        title: "NodeMCU-Deep Sleep",
        url: "/blogs/IOT1",
      },
      {
        type: "internal",
        title: "Getting Started with ESP8266",
        url: "/blogs/IOT2",
      },
      {
        type: "internal",
        title: "NodeMCU ESP-12E",
        url: "/blogs/IOT3",
      },
      {
        type: "internal",
        title: "Getting started with NodeMCU using Arduino IDE",
        url: "/blogs/IOT4",
      },
      {
        type: "internal",
        title: "Sending data to Google Firebase",
        url: "/blogs/IOT5",
      },
    ],
  },
  {
    domain: "Deep Learning",
    blogs: [
      {
        type: "internal",
        title: "What Is Deep Learning?",
        url: "/blogs/DL1",
      },
      {
        type: "internal",
        title: "Deep Learning 2?",
        url: "/blogs/DL2",
      },
      {
        type: "external",
        title: "Machine Learning",
        url: "/assets/pdfs/ML1.pdf",
      },
      {
        type: "external",
        title: "Deep Neural Networks",
        url: "/assets/pdfs/ML2.pdf",
      },
    ],
  },
  {
    domain: "Image Processing",
    blogs: [
      {
        type: "internal",
        title: "Computer Vision",
        url: "/blogs/IP1",
      },
      {
        type: "external",
        title: "Image Processing",
        url: "https://prezi.com/al-6mdxsoqkt/ip-session/?rc=ex0share",
      },
      {
        type: "external",
        title: "Image Processing (Drive)",
        url: "https://drive.google.com/drive/folders/1622AhFxN5ry4_P2tRj57kEIlW1DsKg2k",
      },
    ],
  },
];

function Blogs() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Explore our Blogs</h1>
      </div>
      <div className="blogs-container">
        {blogSections.map((section, idx) => (
          <div key={idx} className="blog-domain">
            <h2 className="domain-title">{section.domain}</h2>
            <ul className="blog-list">
              {section.blogs.map((blog, idx) => (
                <li key={idx}>
                  {blog.type === "external" ? (
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {blog.title}
                    </a>
                  ) : (
                    <Link to={blog.url}>{blog.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
