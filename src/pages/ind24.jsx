import React from "react";
import "../components/Project2.css";

const projectData = [
  {
    title: "Pet Health Monitoring System",
    description: `Pet’s health monitoring system is a belt which can be used to check all the vital parameters of their pets in real-time. Such belts can measure heart rate, temperature etc. By using ECG sensor, we can measure heart rate and with temperature sensor we can measure the pet’s body temperature. If any serious changes occur in any parameters that can be taken as signs of illness, it will send an alert to a pet owner. Physical activity is very important for pets. Modern applications can analyse walking distance, time of activity per day etc. We can use ADXL accelerometer to count the steps during walking. If a pet is not active enough during the day, an owner will be notified. To control all the sensors, we use NodeMCU8266 microcontroller.`,
    image: "/assets/induction23/pet-health.jpg",
  },
  {
    title: "Line Following Robot",
    description: "A competition-ready robot using PID control and IR sensors, optimized for speed and precision.",
    image: "/assets/lfr.jpg",
  },
  {
    title: "Smart Compost System",
    description: "An IoT-based compost system monitoring moisture, methane, temperature, and pH levels for efficient composting.",
    image: "/assets/compost.jpg",
  },
];

function Induction24() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-header">Our Projects</h1>
      {projectData.map((project, index) => (
        <div
          className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="image-container">
            <img src={project.image} alt={project.title} className="project-img" />
            <h2 className="project-title">{project.title}</h2>
          </div>
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Induction24;
