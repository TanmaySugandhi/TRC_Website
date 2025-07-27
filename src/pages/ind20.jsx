import React, { useState } from 'react';
import "../components/Project2.css";

const projects = [
  {
    title: 'Ksheera',
    image: '/assets/indprojects/ind\'20/1.jpeg',
    description: `The problem statement we have selected is that people who are in the fishing industry or who go fishing find it difficult in knowing the exact location or approximate site of best fishing (high quantity and quality fish - swordfish, tuna fish etc). Our idea is to build a network of robots which moves in the sea with basic knowledge, collects data (microplastic concentration, pH, temperature, dissolved oxygen etc.), analyzes it, and suggests the best fishing area.`,
  },
  {
    title: 'Gesture powered stair climbing bot',
    image: '/assets/indprojects/ind\'20/8.jpeg',
    description: `To help physically handicapped and old aged people climb stairs, our team proposes a stair climbing bot controlled by gestures and voice commands.`,
  },
  {
    title: 'Automated wheel chair',
    image: '/assets/indprojects/ind\'20/3.jpeg',
    description: `Stagnant water causes diseases and traffic jams. This bot uses suction pumps to clean stagnant water and redistribute it to plants, while also sprinkling bleaching powder to prevent mosquitoes.`,
  },
  {
    title: 'KISAN MITHR',
    image: '/assets/indprojects/ind\'20/4.jpeg',
    description: `Designed for supermarkets, this bot senses stock levels using weight sensors. If stock is low, it communicates via IoT and navigates using RFID to restock items automatically from a warehouse.`,
  },
  {
    title: 'Beach cleaning Robot',
    image: '/assets/indprojects/ind\'20/15.jpeg',
    description: `This robot collects and separates waste (metallic/non-metallic) from beaches using a conveyor system. It works based on density difference and can also clean floating waste in oceans.`,
  },
  {
    title: 'Women Safety Problem',
    image: '/assets/indprojects/ind\'20/16.jpeg',
    description: `A GPS-based safety device with dual alert features including SOS, emergency alarm, pepper spray, and poison sting. Automatically sends location to emergency contacts when phone battery is low.`,
  },
  {
    title: 'Smart metro',
    image: '/assets/indprojects/ind\'20/7.jpeg',
    description: `To prevent train accidents and improve punctuality, autonomous metro trains are proposed with features like alcohol detection, people counting, and reduced power consumption.`,
  },
  {
    title: 'Mrithyunjaya',
    image: '/assets/indprojects/ind\'20/2.jpeg',
    description: `To reduce car accidents due to human error, cameras on mirrors detect nearby objects. An LED light alerts drivers when objects are too close.`,
  },
  {
    title: 'Blastoise - The Fire Fighting Bot',
    image: '/assets/indprojects/ind\'20/9.jpeg',
    description: `This bot prevents forest fires by monitoring humidity and detecting fire through sensors and image processing. It activates sprinklers or elide balls and notifies authorities if fire is detected.`,
  },
  {
    title: 'Cocinero',
    image: '/assets/indprojects/ind\'20/10.jpeg',
    description: `An autonomous cooking robot that prepares simple dishes like salads based on user input. It chops, stirs, and adds ingredients like salt and pepper for a complete meal.`,
  },
  {
    title: 'Weed Cutter',
    image: '/assets/indprojects/ind\'20/11.jpeg',
    description: `Smart car parking system using RFID and a PIC controller. It parks cars in automated towers, calculates parking time, and deducts charges via e-commerce. GSM module provides slot updates via SMS.`,
  },
  {
    title: 'Chauser',
    image: '/assets/indprojects/ind\'20/12.jpeg',
    description: `A robot that collects and returns shoes in public places using facial recognition. It follows a line to place shoes on racks and retrieves them when the same person returns.`,
  },
  {
    title: 'Driver Drowsiness Detection',
    image: '/assets/indprojects/ind\'20/13.jpeg',
    description: `A bot detects driver drowsiness by monitoring eye blinks. Sends alerts to family and sounds a buzzer. Also includes alcohol detection to prevent drunk driving.`,
  },
  {
    title: 'Abetment',
    image: '/assets/indprojects/ind\'20/14.jpeg',
    description: `A robot for physically challenged individuals, controlled using MEMS sensors on the forefinger via Bluetooth. Detects gesture direction and moves accordingly.`,
  },
  {
    title: 'Stretcher to wheelchair converter',
    image: '/assets/indprojects/ind\'20/5.jpeg',
    description: `Bipedal robot converts between stretcher and wheelchair, adapting foot and torso motion based on terrain using optimized actuator control algorithms.`,
  },
  {
    title: 'Beach garbage cleaner',
    image: '/assets/indprojects/ind\'20/6.jpeg',
    description: `No description available.`,
  },
];


function Induction20() {
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
      <h1 className="head-title">Induction 2020</h1>
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
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>

      {popupData && (
        <div className="popup" style={{ display: 'flex' }}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>×</span>
            <img src={popupData.image} alt="Popup" />
            <h5>{popupData.title}</h5>
            <p>{popupData.description}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Induction20;