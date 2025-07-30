import React, { useState } from 'react';
import "../components/Styles/Project2.css";

const projects = [
  {
    title: 'Farm Bot',
    img: '/assets/PIprojects/PI\'22/pi\'22-4.jpg',
    description: `The bot's body is segmented into slots, each with a moisture sensor that detects soil moisture. Data from these sensors is analyzed and stored in the cloud, then sent to the farmer for informed irrigation decisions.`,
  },
  {
    title: 'Weed Whacker',
    img: '/assets/PIprojects/PI\'22/pi\'22-10.jpg',
    description: `A semiautonomous robot that removes harmful weeds from dams and water tanks to protect aquatic life. Commands are sent from a mobile app to a NodeMCU, which controls the robot’s motors and track belts for remote weed removal.`,
  },
  {
    title: 'Stari Pavithran',
    img: '/assets/PIprojects/PI\'22/pi\'22-11.jpg',
    description: `Uses an exhaust/suction fan to collect and condense smoke, dissolving gases in water to minimize air pollutants. The system filters, balances pH, absorbs dust, and produces water safe for plants.`,
  },
  {
    title: 'Glass Cleaning Bot',
    img: '/assets/PIprojects/PI\'22/pi\'22-9.jpg',
    description: `A simple robot for cleaning glass on high-rise buildings, operated by a switch. Uses basic, inexpensive components. Can clean 1 sq.m of glass in about 2.5 minutes, making labor safer and easier.`,
  },
  {
    title: 'Smart Compost System',
    img: '/assets/PIprojects/PI\'22/pi\'22-5.jpg',
    description: `Automates the maintenance of compost for organic farming by monitoring moisture, heat, pH, and aeration, creating ideal conditions for composting biodegradable waste without constant supervision.`,
  },
  {
    title: 'Security Robot',
    img: '/assets/PIprojects/PI\'22/pi\'22-6.jpg',
    description: `A Raspberry Pi robot equipped with night-vision and sound sensors. Detects sounds or human presence, moves to source, and sends real-time images to the user via IoT for improved security monitoring.`,
  },
  {
    title: 'Wall Curing Bot',
    img: '/assets/PIprojects/PI\'22/pi\'22-1.jpg',
    description: `Automates the curing of concrete walls during construction. Uses ultrasonic sensors for room mapping, follows input dimensions, and sprinkles water up and down the wall, reducing manual labor and time.`,
  },
  {
    title: 'Smart Vending Machine',
    img: '/assets/PIprojects/PI\'22/pi\'22-2.jpg',
    description: `Accepts used glass, plastic bottles, and aluminum cans in exchange for a reward. Automatically compacts, sorts, counts, and weighs the materials for convenient, incentivized recycling.`,
  },
  {
    title: 'Vidyut Rakshak',
    img: '/assets/PIprojects/PI\'22/pi\'22-8.jpg',
    description: `A robot for power line inspection using a rotating camera and robotic arm, controlled via hand gestures with a flex sensor glove. Moves across lines on pulley wheels to visually and physically inspect or adjust components.`,
  },
  {
    title: 'Rakshana',
    img: '/assets/PIprojects/PI\'22/pi\'22-7.jpg',
    description: `A system for ambulance tracking and patient monitoring. Sends the patient’s critical parameters in pictorial format to the hospital before arrival for better emergency preparedness.`,
  },
  {
    title: 'Hay and water dispensers for cattle',
    img: '/assets/PIprojects/PI\'22/pi\'22-3.jpg',
    description: `Automates feeding and watering cattle. Delivers hay via a conveyor belt and fills water containers every six hours using a solenoid valve, ensuring regular animal care with minimal manual effort.`,
  },
  {
    title: 'Density-based smart traffic control',
    img: '/assets/PIprojects/PI\'22/pi\'22-12.jpg',
    description: `Uses IR sensors to detect traffic density at intersections, controlling signals and barricades via servo motors according to vehicle flow every 30 seconds, optimizing traffic regulation programmatically.`,
  },
  {
    title: 'Aparna',
    img: '/assets/PIprojects/PI\'22/pi\'22-13.jpg',
    description: `A delivery robot with a solenoid-locked storage container. Remotely controlled, uses SIM808 for address pinpointing and an OV7670 camera for location verification and secure hand-overs to customers.`,
  },
];


function Post22() {
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
      <h1 className="head-title">Post Induction 2022</h1>
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

export default Post22;