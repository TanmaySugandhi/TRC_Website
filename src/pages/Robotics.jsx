import React from "react";
import { Link } from "react-router-dom";
import "../components/Styles/Blogs.css";

const blogSections = [
  {
    domain: "ELECTRONICS",
    blogs: [
      {
        type: "external",
        title: "Basics of Electronics",
        url: "/assets/pdfs/Electronics1.pdf",
      },
      {
        type: "external",
        title: "Sensors",
        url: "/assets/pdfs/sensors.pdf",
      },
      {
        type: "external",
        title: "Communication Protocols - !",
        url: "/assets/pdfs/Protocols1.pdf",
      },
      {
        type: "external",
        title: "Communication Protocols - II",
        url: "/assets/pdfs/Protocols1.pdf",
      },
      {
        type: "external",
        title: "Microcontrollers",
        url: "/assets/pdfs/MCele.pdf",
      },
      {
        type: "external",
        title: "Radio Frequency",
        url: "/assets/pdfs/rf.pdf",
      },
      {
        type: "external",
        title: "ADC",
        url: "/assets/pdfs/adc.pdf",
      },
    ],
  },
  {
    domain: "MECHANICS",
    blogs: [
      {
        type: "external",
        title: "Basics of Mechanics",
        url: "/assets/pdfs/Mechanics1.pdf",
      },
      {
        type: "external",
        title: "Motors and Actuators",
        url: "/assets/pdfs/Mechanics2.pdf",
      },
      {
        type: "external",
        title: "Robotic Arm",
        url: "/assets/pdfs/ra.pdf",
      },
    ],
  },
  {
    domain: "PROGRAMMING",
    blogs: [
      {
        type: "external",
        title: "Introduction to MicroControllers",
        url: "/assets/pdfs/mc.pdf",
      },
      {
        type: "external",
        title: "Arduino Programming",
        url: "/assets/pdfs/ap.pdf",
      },
    ],
  },
];

function Robotics() {
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

export default Robotics;
