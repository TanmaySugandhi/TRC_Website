import React, { useState } from 'react';
import '../components/Project2.css';

const projects = [
  {
    title: "Pets Helath Monitoring System",
    img: "/assets/indprojects/ind'23/ind23-1.jpg",
    description: "Pet’s health monitoring system is a belt which can be used to check all the vital parameters of their pets in real-time. Such belts can measure heart rate, temperature etc. By using ECG sensor, we can measure heart rate and with temperature sensor we can measure the pet’s body temperature. If any serious changes occur in any parameters that can be taken as signs of illness, it will send an alert to a pet owner. Physical activity is very important for pets. Modern applications can analyse walking distance, time of activity per day etc. We can use ADXL accelerometer to count the steps during walking. If a pet is not active enough during the day, an owner will be notified. To control all the sensors, we use NodeMCU8266 microcontroller."
  },
  {
    title: "Automation of Waste material Segregation",
    img: "/assets/indprojects/ind'23/ind23-2.jpg",
    description: "An Automation of Waste material Segregation in scrap industry. This method is easy and simple solution of segregation of three types of wastes glass, metal and plastic. It is designed to sort the trash into metallic waste, plastic waste and glass waste ready to be processed separately for the next process of operation. The Method uses inductive sensors metallic items, and capacitive sensors to distinguish between and dry waste. Experimental results show that the segregation of waste into metallic, plastic and glass waste has been successfully implemented using the Automation of material segregation (AMS) method."
  },
  {
    title: "Oil Skimmer Robot",
    img: "/assets/indprojects/ind'23/ind'23-3.jpg",
    description: "Oil Skimmer Robot is a device which can be used for ocean purification by removing the oil from water surface. The system uses a metal disk where the oil is stick to the metal and oil is extracted from metal disk. As the oil is collected to the tray from the disk and the oil is collected in a container. Making the collection process seamless and efficient. This process is more streamlined than current ocean-skimming technologies because the robot can operate wirelessly. And with the help of the camera the operator can see the visual. And we are also using ultrasonic sensor to detect the oil storing capacity."
  },
  {
    title: "Pillar alert system",
    img: "/assets/indprojects/ind'23/ind'23-4.jpg",
    description: "We can develop a 4 pillar vehicle alert system, we can use these 2 pillars on one side of the road and other 2 pillars on other side, both the pairs will be placed 300m away from each other. This system is helpful at hairpin roads and sharp turns where other side is invisible. These pillars will have a speed gun and a display. A speed gun will detect if any vehicle is coming and will be displayed on the other side display, so that the other side vehicle will get alert, this will reduce accidents at sharp turns and rough Rocky roads. We can implement the traffic control system when there is heavy vehicles flow at narrow but using barrier gates to stop one side vehicle. We can implement a challan system also and also add directions on the display board."
  },
  {
    title: "Dhana Jnyana",
    img: "/assets/indprojects/ind'23/ind'23-5.jpg",
    description: "Automatic Detection on Fake money is very important in many fields such as in banks and other commercial areas. This method is used to identify the Indian money which is valid. So we have come up with a counterfeit currency detector by using Arduino, bread board, magnetic and colour sensors. As we place the currency note magnetic sensor will detect whether the note is real or fake using security thread. Then it will be visible on the LCD screen whether the note is real or not."
  },
  {
    title: "Water Leakage Detection System",
    img: "/assets/indprojects/ind'23/ind'23-6.jpg",
    description: "Water leakage detection system is helpful in detecting the water leak in early stages itself. This system works with integration of moisture sensor, humidity sensor, pH sensor, pressure sensor near pipe lines which are for industrial purpose and not much deep inside the ground. This system can also detect the leakage during rains. The system is also having an alert system integrated with it which sends a message via GSM module to industry management or plumbing services whenever a leakage is found in the pipe."
  },
  {
    title: "Smart Wheelchair",
    img: "/assets/indprojects/ind'23/ind'23-7.jpg",
    description: "A voice-controlled smart wheelchair can be created using a microphone, a voice recognition module, and an Arduino board. The voice recognition module understands the user's spoken commands, which are captured by the microphone. The Arduino board receives and interprets the commands, using ultrasonic sensors for obstacle detection, to control the wheelchair's movements. The electric motor powers the wheelchair, and the rechargeable battery ensures a long battery life. The system can be programmed to adjust the wheelchair's speed according to the user's voice commands, and it also has an emergency button to alert someone in case of danger or emergency situations. This innovative system provides greater independence and mobility to people with mobility issues."
  },
  {
    title: "Food Grain Protector",
    img: "/assets/indprojects/ind'23/ind'23-8.jpg",
    description: "We have come up with an idea which can dry and filter the food grains automatically. We place a 4 wheeled bot on the area where the food grains are piled up. The bot contains a spreader which is just a wooden beam in the front. As soon as the bot is switched on the bot moves forward spreading the pile evenly. This bot also contains a few fans driven by 1000 rpm motors. When these fans are turned on, the dust particles present in the food grains are forced out. We also interfaced a rain sensor module with the bot. The bot contains a plastic cover at the back held up by servo motors. As soon as the rain sensor detects rain, the servo motors rotate freeing the covers on to the food grains. Hence making most of the physical work after harvesting much more easier and quicker."
  },
  {
    title: "Smart Luggage System",
    img: "/assets/indprojects/ind'23/ind'23-9.jpg",
    description: "Our project majorly aims to solve the difficulties faced by the people while carrying their luggage. Here, there will be a transmitter and a receiver, where the transmitter is handled by the person whom the luggage belongs to, and the receiver is attached to the luggage carrying robot, so whenever the transmitter is moved it sends signal to the receiver, and the robot containing receiver moves according to the signals which are transmitted by the transmitter and thus the luggage carrying robot follows the instructions given by its owner and acts according to it. And by using this system the carrying of luggage becomes easier when compared to carrying the luggage manually."
  },
  {
    title: "Disaster Management Robot",
    img: "/assets/indprojects/ind'23/ind'23-10.jpg",
    description: "Disaster management robot is a bot which is used for surveillance and provide data during the disasters. The robot uses unique micro-wave sensor, which detects human movement and provide the location of the movement so that rescuers can find the victims. There is also a camera installed which allows us to view the weak points in the debris so that the rescuers can be safe. In case of any fire accidents the bot makes itself a path way through the fire by extinguishing the fire. The main purpose to create this bot is for the survey of the area affected by the disaster such as Earthquakes, etc."
  },
  {
    title: "Automated Car Parking",
    img: "/assets/induction.jpg",
    description: "A smart car parking system has been developed that uses RFID reader and PIC controller to support modern car parking designs. The prototype includes a parking tower with three slots on each side of a central lift. Users drive their car onto the lift, and the PIC controller automatically identifies and parks the car in an empty slot. The system is made up of Arduino Uno, sensors, LCD, server motors, conveyor belts, and software that work together to convey the car to its calculated parking slot. A relevant clock helps to calculate the time period during which the car is parked, and the amount is deducted from the user's account using an automatic e-commerce system. The system also includes a GSM module that responds to users' SMS requests by providing information about available slots at a particular time. This car parking system is designed to make parking more efficient and less frustrating for users in crowded areas like shopping malls, marts, and theaters."
  },
  {
    title: "Specta for Blind",
    img: "/assets/indprojects/ind'23/ind'23-12.jpg",
    description: "This project ‘Specta for blind people’ processes an image through image processing technology and after that process, the robot reads the content in the image to the blind people and also the robot detects the obstacles while walking and helps them to walk carefully. Image processing is the process of transforming an image into a digital form and performing certain operations to get some useful information like the location of object in front of them and what type of object it is."
  },
  {
    title: "Smart safety monitoring helmet for coal mine workers",
    img: "/assets/indprojects/ind'23/ind'23-13.jpg",
    description: "We used Temperature and Humidity sensor(DHT-11), Gas Sensors like MQ-4 sensor to detect methane gas and MQ-7 sensor to detect carbon monoxide. The improved safety features in our system dramatically increased anticipation of the coal miners by alerting them about the hazards. In our system, the helmet has the circuit with three sensors i.e. Temperature, humidity, gas sensors to watch the conditions in coal pit. If there's any hazardous situation within the mine the helmet have the protection provisions for the miners and also for outdoor operators by making the buzzers active which is occurred in positioned within the helmet in order that a miner can leave coal mines and create a chance to rescue his life from the hazard."
  },
  {
    title: "Jala Prathivedanam",
    img: "/assets/indprojects/ind'23/ind'23-14.jpg",
    description: "This project to inform the people about the upcoming flood by making use of the concept of Internet of Things. For that purpose we are going to use an android Application to intimate the users. This Project focuses on providing early detection of flooding and the measures to minimise and avoid floods. The system involves the deployment of sensor nodes at specific flood vulnerable locations for real-time flood monitoring and detection. Flood events relating to flash flooding and run-off water or overflow are successfully monitored in real time which saves individuals plenty of time to prepare against predicted flood occurrence, saving them from the aftermath of flood disaster."
  }
];

function Induction23() {
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

export default Induction23;