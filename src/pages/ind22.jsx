import React, { useState } from 'react';
import "../components/Styles/Project2.css";

const projects= [
  {
    id: "service-container-1",
    title: "Swatch Neer",
    image: "/assets/indprojects/ind'22/1.jpg",
    description: `Nowadays due to urbanization and industrial development, water bodies are contaminated. This leads to water pollution and the death of aquatic life. The increased levels of particulate matter in water bodies decrease the amount of dissolved oxygen in water, posing a threat to water animals and the trash disposal decreases the cleanliness and sanity of the water bodies. This problem can be resolved by making a bot which can remove the waste and check the pollution level in the water bodies. This robot is remote-operated. The bot helps in finding ppm using a TDS meter and pH of water bodies by IOT and modern, innovative technology. The bot collects plastic and other noticeable waste from the water bodies. A net is used to collect the garbage. A water cleaning bot is a small helping hand to the people who clean the water bodies manually. It reduces their time.`
  },
  {
    id: "service-container-2",
    title: "Automation of Waste material Segregation",
    image: "/assets/indprojects/ind'22/2.jpg",
    description: `An Automation of Waste material Segregation in scrap industry. This method is easy and simple solution of segregation of three types of wastes glass, metal and plastic. It is designed to sort the trash into metallic waste, plastic waste and glass waste ready to be processed separately for the next process of operation. The Method uses inductive sensors metallic items, and capacitive sensors to distinguish between and dry waste. Experimental results show that the segregation of waste into metallic, plastic and glass waste has been successfully implemented using the Automation of material segregation (AMS) method.`
  },
  {
    id: "service-container-3",
    title: "Stabler",
    image: "/assets/indprojects/ind'22/4.jpg",
    description: `The aim of the project is to build a bot which is helpful to clear the problems facing in parking lots due to jams. In our daily life we are seeing a lot of traffic in parking areas, drive-ins, pubs, malls – in these areas many cars and other vehicles are rushed and a less area will be allotted for these, wasting a lot of time. Automating a few functionalities of these parking systems may result in a more reliable and secure setup. Our project uses a pre-programmed technology to achieve automation. It manages the parking system, monitors the car count, displays how many cars are in that area, and manages door mechanisms. It works without the requirement of human supervision.`
  },
  {
    id: "service-container-4",
    title: "Ghani Suraksha",
    image: "/assets/indprojects/ind'22/3.jpg",
    description: `One of the riskiest and most precarious careers comprises mining. With a high death toll caused by explosions, fire mishaps, ground sinking, and toxic gases, safety is a major concern. The vehicles transporting materials also face risk due to toxic gas exposure. This project aims to improve driver safety by using technology that produces oxygen based on irregularities in the chauffeur’s breath. This reduces fatigue and danger, providing a safer driving experience without human management.`
  },
  {
    id: "service-container-5",
    title: "Dhana Jnyana",
    image: "/assets/indprojects/ind'22/5.jpg",
    description: `Automatic detection of fake money is crucial in banks and commercial sectors. This project identifies valid Indian currency using an Arduino-based system with magnetic and color sensors. When a note is placed, a magnetic sensor detects the security thread to verify authenticity. An LCD displays whether the note is real or fake.`
  },
  {
    id: "service-container-6",
    title: "UV Sterilization Robot",
    image: "/assets/indprojects/ind'22/6.jpg",
    description: `A semi-autonomous robot used for UV sterilization to reduce microorganisms in operating or patient rooms. UV-C light at 254 nm is effective for disinfection but harmful to humans. The bot can be controlled remotely via Bluetooth and camera module, ensuring safety and efficiency. It reduces time for sterilization while covering maximum area without exposing workers to harmful UV.`
  },
  {
    id: "service-container-7",
    title: "Vaimalya",
    image: "/assets/indprojects/ind'22/7.jpg",
    description: `TRASHBOT includes an IoT interface for autonomous/manual control. A robotic arm collects and segregates trash into metallic and non-metallic categories. It uses sensors and a camera to avoid obstacles and identify trash. Powered by a solar panel, it's amphibious (land and water) and includes wiper and vacuum systems for area cleaning. It aims to ensure 0% garbage in a designated zone.`
  },
  {
    id: "service-container-8",
    title: "Ikshana",
    image: "/assets/indprojects/ind'22/8.jpg",
    description: `A baby monitoring robot for use in the absence of caretakers. Features include a night light for sleep, automatic bubble emitter, SD card for music/voice playback, and a rain sensor to detect bed wetting and notify parents. A camera and IoT system allow remote monitoring.`
  },
  {
    id: "service-container-9",
    title: "Smart Locker",
    image: "/assets/indprojects/ind'22/9.jpg",
    description: `Smart Locker system designed for apartments and gated communities to ensure secure delivery of parcels. Each locker is assigned to a flat and linked with Google Firebase. Access is controlled by a unique OTP generated via an authenticator. This prevents theft and enables residents to collect deliveries even when not home.`
  },
  {
    id: "service-container-10",
    title: "Tennis Ball Collector",
    image: "/assets/induction.jpg",
    description: `This robot addresses the time-consuming task of manually collecting tennis balls during practice sessions. Designed through research and group discussions, the project uses efficient mechanisms to automatically gather scattered tennis balls on the court, saving time and effort.`
  }
];


function Induction22() {
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
      <h1 className="head-title">Induction 2023</h1>
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

export default Induction22;