import React, { useState } from 'react';
import "../components/Styles/Project2.css";

const projects = [
  {
    title: 'Wildlife Observatory Robot',
    img: '/assets/PIprojects/PI\'21/1.jpg',
    description: `Capturing the beauty of nature and wild animals in sanctuaries and forests without having a human risk and supporting the wildlife photographers...`,
  },
  {
    title: 'Sangrahi',
    img: '/assets/PIprojects/PI\'21/2.jpg',
    description: `An intelligent waste management system that helps keep its surroundings clean of trash. We can know the face of those who throw any suspicious thing in the bin through the installed camera...`,
  },
  {
    title: 'Roll Stuhl’6',
    img: '/assets/PIprojects/PI\'21/3.jpg',
    description: `A lightweight wheelchair utilizing the Rocker Bogie Mechanism. It offers smooth mobility across diverse terrains, can navigate staircases, and includes features like manual reclination and heart rate monitoring...`,
  },
  {
    title: 'Gulshan',
    img: '/assets/PIprojects/PI\'21/4.jpg',
    description: `A smart nursery system that detects climatic conditions and automatically takes care of plant needs using sensors for humidity, temperature, moisture, and light...`,
  },
  {
    title: 'Smart Hand Control Wheelchair',
    img: '/assets/PIprojects/PI\'21/5.jpg',
    description: `A wheelchair that initiates movement using hand tilts via an accelerometer, helping elderly and disabled individuals gain independence...`,
  },
  {
    title: 'Ikshana',
    img: '/assets/PIprojects/PI\'21/6.jpg',
    description: `An affordable gadget for the visually impaired that uses a camera module to scan for objects and provides voice instructions via a speaker...`,
  },
  {
    title: 'Khandbahale',
    img: '/assets/PIprojects/PI\'21/7.jpg',
    description: `A field monitoring system that detects movement and alerts owners via text. It allows live streaming of the area through mobile using eye blink detection...`,
  },
  {
    title: 'Takvator',
    img: '/assets/PIprojects/PI\'21/8.jpg',
    description: `A smart truck system with sensors to detect spoilage in fruits and vegetables, methane gas emissions, and controls to maintain freshness...`,
  },
  {
    title: 'Philozoic Robot',
    img: '/assets/PIprojects/PI\'21/9.jpg',
    description: `An autonomous pet feeding robot that dispenses food at scheduled times and allows remote pet monitoring via IoT...`,
  },
  {
    title: 'Jwala Rathi',
    img: '/assets/PIprojects/PI\'21/10.jpg',
    description: `A fire-fighting bot activated by heat and smoke sensors. It extinguishes fire and sends alerts to residents and fire stations...`,
  },
  {
    title: 'Bhuskhalan',
    img: '/assets/Pix.jpg',
    description: `A landslide detection device that uses sensors to detect early signs and alerts nearby people through a buzzer and display...`,
  },
  {
    title: 'Old Fashioned',
    img: '/assets/Pix.jpg',
    description: `A drink dispensing system for public venues allowing users to order customized drinks via a mobile app to reduce physical contact...`,
  },
  {
    title: 'Agni Raksha',
    img: '/assets/Pix.jpg',
    description: `A fire safety robot equipped with helium gas cylinders that autonomously informs fire stations and helps suppress fire more efficiently...`,
  },
];


function Post21() {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (project) => {
    setPopupData(project);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <>
    <div className="header">
      <h1 className="head-title">Post Induction 2021</h1>
    </div>
    <div className="projects-wrapper">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => openPopup(project)}
          >
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>

      {popupData && (
        <div className="popup" style={{ display: 'flex' }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>×</span>
            <img src={popupData.img} alt="Popup" />
            <h5>{popupData.title}</h5>
            <p>{popupData.description}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Post21;