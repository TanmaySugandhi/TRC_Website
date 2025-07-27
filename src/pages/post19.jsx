import React, { useState } from 'react';
import "../components/Project2.css";

const projects = [
  {
    title: 'KALYAHA YAN',
    img: '/assets/PIprojects/PI\'19/post1.jpeg',
    description: `It means a machine for disabled people to make their lives easier. Gestures are detected and converted to messages and voice using image processing. This bot help disable people to talk with normal people. As dumb person cannot speak this bot helps them to convert their hand gesture into text and pre-recorded voice. This also helps a normal person to understand what he is trying say and reply accordingly.`,
  },
  {
    title: 'ALL-TERRAIN BOT',
    img: '/assets/PIprojects/PI\'19/post2.jpeg',
    description: `All-terrain bot with different movement mechanism (with suspensions) and completely wireless. This bot makes carrying the load or travelling on any surface easier due to suspension. It can also be a good assistant and load-carrier on different terrains. Speed is increased thanks to the suspension.`,
  },
  {
    title: 'STRGNANT WATER CLEANING',
    img: '/assets/PIprojects/PI\'19/post3.jpeg',
    description: `Designed to remove stagnant water that causes disease and traffic jams. Suction pumps collect water from roads to irrigate plants; bleaching powder is sprayed to stop mosquito breeding. Motion control and moisture sensors automate operation.`,
  },
  {
    title: 'AUTOMATIC RACK FILLING SYSTEM IN SHOPPING MALLS',
    img: '/assets/PIprojects/PI\'19/post4.jpeg',
    description: `Weight sensors detect low stock on supermarket racks and, via IoT, summon a warehouse robot. Guided by RFID, the robot retrieves the required load and places it on the correct rack, reducing manual labour.`,
  },
  {
    title: 'ROW-BOAT',
    img: '/assets/PIprojects/PI\'19/post5.jpeg',
    description: `A floating robot that cleans papers, leaves and plastics from water surfaces. Reaches debris using propulsion and retrieves it with a conveyor belt. Waterproof ultrasonic sensors detect waste locations.`,
  },
  {
    title: 'EVILSPY',
    img: '/assets/PIprojects/PI\'19/post6.jpeg',
    description: `Tele-presence bot with a camera “eye.” Head-tracking via VR headset rotates the camera remotely using LoRa, letting the operator look around distant or inaccessible areas in real time.`,
  },
  {
    title: 'Stamping Robot',
    img: '/assets/PIprojects/PI\'19/post7.jpeg',
    description: `Automates document verification and stamping, saving time and labour by detecting documents and applying the correct stamp autonomously.`,
  },
  {
    title: 'LUGGAGE CARRYING AND TRANSPORTING IN RAILWAY STATION',
    img: '/assets/PIprojects/PI\'19/post8.jpeg',
    description: `Users contact the robot via a mobile app (Blynk). GPS and ultrasonic sensors let it navigate to the customer, carry bulky luggage and then follow the person to the destination, reducing effort and increasing accuracy.`,
  },
  {
    title: 'GESTURE TO MACHINE BOT',
    img: '/assets/PIprojects/PI\'19/post10.jpeg',
    description: `Recognises hand gestures of differently-abled people and sends SMS messages to caretakers. Displays the interpreted need, helping non-verbal users to communicate conveniently.`,
  },
  {
    title: 'EVM 2.0',
    img: '/assets/PIprojects/PI\'19/post17.jpeg',
    description: `Tamper-proof robotic voting machine using iris and fingerprint matching against Aadhaar data (via QR scan). Votes are stored in Firebase; works only when microcontroller and database share the same Wi-Fi network.`,
  },
  {
    title: 'SMART TROLLEY',
    img: '/assets/PIprojects/PI\'19/post11.jpeg',
    description: `Shopping trolley that autonomously follows the customer, fetches items from shelves, and aims to shorten checkout queues and ease heavy loads.`,
  },
  {
    title: 'Adiuva',
    img: '/assets/PIprojects/PI\'19/post12.jpeg',
    description: `Sophisticated walking stand for semi-disabled users. Reduces mechanical strain; when the user tires, wheels allow the frame to roll, making movement and object retrieval easier.`,
  },
  {
    title: 'WALKER TO ROVER',
    img: '/assets/PIprojects/PI\'19/post18.jpeg',
    description: `Quadruped robot that transforms between walking mode for rough terrain and wheeled rover mode for flat, faster travel, offering versatile mobility.`,
  },
  {
    title: 'NEW-GEN BATHROOM',
    img: '/assets/PIprojects/PI\'19/post14.jpeg',
    description: `Smart bathroom that monitors user safety (e.g., fainting detection with alarm) and provides optimal-temperature showers that track user motion for ergonomic comfort.`,
  },
  {
    title: 'WEARABLE KEYBOARD',
    img: '/assets/PIprojects/PI\'19/post15.jpeg',
    description: `Portable capacitive-touch keyboard worn on the body. Detects tap patterns via body capacitance, prints characters on an LCD and sends them to a mobile app.`,
  },
  {
    title: 'VarnaBot',
    img: '/assets/PIprojects/PI\'19/post16.jpeg',
    description: `Delivery robot with a solenoid-locked storage container. Remote-controlled; uses SIM808 for GPS address pinpointing and OV7670 camera to confirm recipient location before hand-off.`,
  },
  {
    title: 'WEIGHT-LIFTER ROBOT',
    img: '/assets/PIprojects/PI\'19/post13.jpeg',
    description: `Helps lift heavy objects to high places, clean ceilings and fans. Multifunctional arm reduces physical effort in homes or workplaces.`,
  },
  {
    title: 'BOREWELL ACCIDENT RESCUING ROBOT',
    img: '/assets/PIprojects/PI\'19/post9.jpeg',
    description: `Designed to speed up and improve the success rate of rescuing children trapped in open borewells, addressing rising fatalities due to delayed, labour-intensive operations.`,
  },
];


function Post19() {
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
      <h1 className="head-title">Post Induction 2019</h1>
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

export default Post19;