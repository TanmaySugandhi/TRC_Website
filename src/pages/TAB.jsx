import React, { useState } from "react";
import "../components/Styles/Tab.css";

const tabData = [
  {
    name: "CAD & PCB",
    description:
      "Workshops & projects on CAD design, PCB fabrication, and related tools.",
    years: [
      {
        year: 2024,
        major: [
          {
            title: "PCB Design for Autonomous Bots",
            description:
              "Multi-layer PCB design and fabrication for autonomous mobile robots.",
            image: "/assets/project-images/pcb-robot.jpg",
          },
          {
            title: "Smart Home PCB Module",
            description:
              "Custom PCB for home automation with sensors and relay controls.",
            image: "/assets/project-images/smart-home-pcb.jpg",
          },
        ],
        minor: [
          {
            title: "Beginner Eagle CAD Workshop",
            description:
              "Introduction to circuit design using Eagle CAD software.",
            image: "/assets/project-images/pcb-workshop.jpg",
          },
        ],
      },
      {
        year: 2023,
        major: [
          {
            title: "Wearable Health Monitor PCB",
            description:
              "Designed and assembled PCB for monitoring vital health parameters.",
            image: "/assets/project-images/health-monitor-pcb.jpg",
          },
        ],
        minor: [
          {
            title: "PCB Soldering Practice",
            description: "Hands-on soldering and component mounting workshop.",
            image: "/assets/project-images/soldering-practice.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "ROS",
    description:
      "Training on Robot Operating System, SLAM, and autonomous navigation.",
    years: [
      {
        year: 2024,
        major: [
          {
            title: "Autonomous Mapping Robot",
            description:
              "Developed a mobile robot capable of SLAM-based mapping using ROS2.",
            image: "/assets/project-images/ros-mapper.jpg",
          },
          {
            title: "Multi-Robot Coordination",
            description:
              "Implemented communication and task allocation among ROS-based robots.",
            image: "/assets/project-images/ros-multi-robot.jpg",
          },
        ],
        minor: [
          {
            title: "ROS Beginner Workshop",
            description:
              "Basics of ROS architecture, nodes, and message passing.",
            image: "/assets/project-images/ros-workshop.jpg",
          },
          {
            title: "ROS Simulation",
            description: "Running simulated robots in Gazebo environment.",
            image: "/assets/project-images/ros-gazebo.jpg",
          },
        ],
      },
      {
        year: 2023,
        major: [
          {
            title: "Autonomous Delivery Robot",
            description:
              "Robot designed to deliver items autonomously using ROS navigation stack.",
            image: "/assets/project-images/ros-delivery.jpg",
          },
        ],
        minor: [
          {
            title: "Sensor Integration with ROS",
            description:
              "Integrating LIDAR and camera sensors with ROS for environment perception.",
            image: "/assets/project-images/ros-sensors.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Embedded",
    description:
      "Microcontrollers and embedded systems, real-time programming.",
    years: [
      {
        year: 2024,
        major: [
          {
            title: "Robotic Arm Controller",
            description:
              "ARM-based embedded system with custom firmware for precision control.",
            image: "/assets/project-images/embedded-arm.jpg",
          },
          {
            title: "RTOS Based Drone Controller",
            description:
              "Implemented real-time OS scheduling for drone flight control.",
            image: "/assets/project-images/embedded-drone.jpg",
          },
        ],
        minor: [
          {
            title: "Embedded C Workshop",
            description:
              "Introduction to embedded C programming with microcontroller kits.",
            image: "/assets/project-images/embedded-workshop.jpg",
          },
        ],
      },
      {
        year: 2023,
        major: [
          {
            title: "Energy Efficient Sensor Node",
            description:
              "Designed embedded firmware to optimize power consumption in sensor nodes.",
            image: "/assets/project-images/embedded-sensor.jpg",
          },
        ],
        minor: [
          {
            title: "Arduino Robotics",
            description:
              "Building basic robots using Arduino IDE and microcontrollers.",
            image: "/assets/project-images/arduino-robot.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "IoT",
    description:
      "Internet of Things technologies, cloud integration, and smart devices.",
    years: [
      {
        year: 2024,
        major: [
          {
            title: "Smart Agriculture System",
            description:
              "IoT sensors and cloud dashboard to monitor soil and weather conditions.",
            image: "/assets/project-images/iot-agriculture.jpg",
          },
          {
            title: "Home Automation System",
            description:
              "IoT devices controlled via mobile app with voice assistant integrations.",
            image: "/assets/project-images/iot-home.jpg",
          },
        ],
        minor: [
          {
            title: "IoT Workshop for Beginners",
            description:
              "Learning IoT basics, sensors, and Raspberry Pi configurations.",
            image: "/assets/project-images/iot-workshop.jpg",
          },
        ],
      },
      {
        year: 2023,
        major: [
          {
            title: "Smart Water Management",
            description:
              "Automated water level monitoring with alert system using IoT.",
            image: "/assets/project-images/iot-water.jpg",
          },
        ],
        minor: [
          {
            title: "ESP32 Projects",
            description:
              "Hands-on workshop on ESP32 microcontroller and Wi-Fi capabilities.",
            image: "/assets/project-images/iot-esp32.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Deep Learning",
    description: "AI, neural networks, and deep learning applications.",
    years: [
      {
        year: 2024,
        major: [
          {
            title: "Autonomous Vehicle Detection",
            description:
              "Deep learning model to detect vehicles in real-time video streams.",
            image: "/assets/project-images/dl-vehicle.jpg",
          },
          {
            title: "Speech Recognition Systems",
            description:
              "Implemented RNN-based speech-to-text on embedded platforms.",
            image: "/assets/project-images/dl-speech.jpg",
          },
        ],
        minor: [
          {
            title: "DL Foundations Workshop",
            description:
              "Introduction to neural networks and TensorFlow basics.",
            image: "/assets/project-images/dl-workshop.jpg",
          },
        ],
      },
      {
        year: 2023,
        major: [
          {
            title: "Gesture Recognition",
            description:
              "CNN model for recognizing hand gestures from camera input.",
            image: "/assets/project-images/dl-gesture.jpg",
          },
        ],
        minor: [
          {
            title: "AI Model Deployment",
            description: "Deploying AI models on low-power devices.",
            image: "/assets/project-images/dl-deploy.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Image Processing",
    description: "Techniques for analyzing and manipulating visual data.",
    years: [
      {
        year: 2024,
        major: [
          {
            title: "Campus Surveillance System",
            description:
              "Image processing pipeline for detecting intruders and anomalies.",
            image: "/assets/project-images/ip-surveillance.jpg",
          },
          {
            title: "Medical Image Analysis",
            description:
              "Automatic segmentation and classification of MRI scans.",
            image: "/assets/project-images/ip-medical.jpg",
          },
        ],
        minor: [
          {
            title: "OpenCV Workshop",
            description: "Hands-on with OpenCV for beginners.",
            image: "/assets/project-images/ip-workshop.jpg",
          },
        ],
      },
      {
        year: 2023,
        major: [
          {
            title: "Object Tracking System",
            description:
              "Real-time tracking of moving objects using video streams.",
            image: "/assets/project-images/ip-tracking.jpg",
          },
        ],
        minor: [
          {
            title: "Image Filters and Effects",
            description:
              "Creative project applying filters and transformations.",
            image: "/assets/project-images/ip-filters.jpg",
          },
        ],
      },
    ],
  },
];

export default function TABPage() {
  const [activeTab, setActiveTab] = useState(0);
  const domain = tabData[activeTab];

  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Techincal Advisory Board</h1>
      </div>
      <div className="tab-outside">
      <div className="tab-container">
        <div className="tab-header">
          {tabData.map((d, idx) => (
            <button
              className={idx === activeTab ? "tab-btn tab-active" : "tab-btn"}
              onClick={() => setActiveTab(idx)}
              key={d.name}
            >
              {d.name}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <h2>{domain.name}</h2>
          <p className="tab-domain-description">{domain.description}</p>
          {domain.years.map((yearBlock) => (
            <div key={yearBlock.year} className="tab-year-section">
              <h3>{yearBlock.year}</h3>
              <div className="tab-projects">
                <div>
                  <h4>Major Projects</h4>
                  <div className="tab-project-card-row">
                    {yearBlock.major.length ? (
                      yearBlock.major.map((proj, j) => (
                        <div className="tab-project-card" key={j}>
                          <img
                            className="tab-project-img"
                            src={proj.image}
                            alt={proj.title}
                          />
                          <div className="tab-project-info">
                            <span className="tab-project-title">
                              {proj.title}
                            </span>
                            <p>{proj.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <i>No major projects listed.</i>
                    )}
                  </div>
                </div>
                <div>
                  <h4>Minor Projects</h4>
                  <div className="tab-project-card-row">
                    {yearBlock.minor.length ? (
                      yearBlock.minor.map((proj, j) => (
                        <div className="tab-project-card" key={j}>
                          <img
                            className="tab-project-img"
                            src={proj.image}
                            alt={proj.title}
                          />
                          <div className="tab-project-info">
                            <span className="tab-project-title">
                              {proj.title}
                            </span>
                            <p>{proj.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <i>No minor projects listed.</i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
