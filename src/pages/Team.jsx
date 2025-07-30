import React from "react";
import TeamCard from "../components/TeamCard";
import "../components/Styles/Team.css";

const Steering = [
  {
    name: "G. Kovid Addhish",
    role: "President",
    phone: "9492030214",
    year: "ECE 4th year",
    img: "/assets/Board/president.jpg",
  },
  {
    name: "R. Surya Prakash",
    role: "Vice President",
    phone: "9491457980",
    year: "ECM 3rd year",
    img: "/assets/Board/VP.jpg",
  },
  {
    name: "P. Aarushraj",
    role: "General Secretary",
    phone: "9121870141",
    year: "ECE 4th year",
    img: "/assets/Board/Gensec.jpg",
  },
  {
    name: "V. S. S. Sankeerth",
    role: "SAB Chair-Person",
    phone: "9550632658",
    year: "ECE 4th year",
    img: "/assets/Board/SabChairman.jpg",
  },
];

const Executive = [
  {
    name: "B. Navyashaa Reddy",
    role: "Joint Secretary for Technical Affairs",
    phone: "7013224364",
    year: "ECE 3rd year",
    img: "/assets/Board/Jstechnical1.jpg",
  },
  {
    name: "P. Phani Anirudh",
    role: "Joint Secretary for Technical Affairs ",
    phone: "9959366367",
    year: "ECE 3rd year",
    img: "/assets/Board/Jstechnical2.jpg",
  },
  {
    name: "N. Sivani",
    role: "Joint Secretary for Management and Development",
    phone: "9000698663",
    year: "ECM 3rd year",
    img: "/assets/Board/Jsmanagement.jpg",
  },
  {
    name: "M. Likitha",
    role: "Joint Secretary for Internal Affairs",
    year: "ECE 3rd year",
    phone: "7989403919",
    img: "/assets/Board/Jsinternal.jpg",
  },
  {
    name: "Srinath Itham",
    role: "Joint Secretary for External Affairs",
    year: "ECM 3rd year",
    phone: "9441002388",
    img: "/assets/Board/Jsexternal.jpg",
  },
  {
    name: "Rohith Chand R N",
    role: "Joint Secretary for Organising and Networking",
    year: "CSM 3rd year",
    phone: "7036161079",
    img: "/assets/Board/Jsorganising1.jpg",
  },
  {
    name: "B. Poojitha",
    role: "Joint Secretary for Organising and Networking",
    year: "ECE 3rd year",
    phone: "9182264540",
    img: "/assets/Board/Jsorganising2.jpg",
  },
  {
    name: "A. Tejaswi",
    role: "Joint Secretary for Designing",
    year: "CSM 3rd year",
    phone: "8317580631",
    img: "/assets/Board/Jsdesigning1.jpg",
  },
  {
    name: "V. Ananth Jeeth",
    role: "Joint Secretary for Designing",
    year: "ECE 3rd year",
    phone: "8978760374",
    img: "/assets/Board/Jsdesigning2.jpg",
  },
];

const TAB = [
  {
    name: "M. Sarvanan",
    role: "Chairman",
    phone: "9516532696",
    year: "ECE 4th year",
    img: "/assets/Board/Tabchairman.jpg",
  },
  {
    name: "A. Sathwika",
    role: "Head of Computer Vision",
    phone: "741679069",
    year: "IT 4th year",
    img: "/assets/Board/HeadCV.jpg",
  },
  {
    name: "P. Sudhensh Reddy",
    role: "Head of Designing",
    phone: "9494495538",
    year: "ECE 4th year",
    img: "/assets/Board/HeadDesigning.jpg",
  },
  {
    name: "G. Bhargava Teja",
    role: "Head of Embedded",
    phone: "8121172348",
    year: "ECE 4th year",
    img: "/assets/Board/HeadEmbedded.jpg",
  },
  {
    name: "S. Tanmay",
    role: "Designing Executive",
    phone: "9492064302",
    year: "ECM 3rd year",
    img: "/assets/Board/CADExec.jpg",
  },
  {
    name: "G. Geethika",
    role: "Designing Executive",
    phone: "8142158200",
    year: "ECE 3rd year",
    img: "/assets/Board/ROSExec.jpg",
  },
  {
    name: "V. Parichaya Reddy",
    role: "Computer Vision Executive",
    phone: "9515135304",
    year: "CSE 3rd year",
    img: "/assets/Board/DLExec2.jpg",
  },
  {
    name: "M. Sai Varun",
    role: "Computer Vision Executive",
    phone: "910347871",
    year: "CSM 3rd year",
    img: "/assets/Board/ImageExec.jpg",
  },
  {
    name: "B. Sujana",
    role: "Embedded Executive",
    phone: "9346592915",
    year: "ECE 3rd year",
    img: "/assets/Board/EmbeddedExec.jpg",
  },
  {
    name: "P. Bhanunandhan",
    role: "Embedded Executive",
    phone: "9347222401",
    year: "ECM 3rd year",
    img: "/assets/Board/IOTExec.jpg",
  },
];

const CIC = [
  {
    name: "G. Nikitha",
    role: "Chairman",
    phone: "8074485159",
    year: "IT 4th year",
    img: "/assets/Board/ChairmanCIC.jpeg"
  },
  {
    name: "A. Saketh",
    role: "Vice Chairman",
    phone: "9398188364",
    year: "ECE 4th year",
    img: "/assets/Board/VChairmanCIC.jpeg"
  },
  {
    name: "V. Thanush",
    role: "Executive",
    phone: "9704712473",
    year: "ECE 3rd year",
    img: "/assets/Board/CICExec1.jpg"
  },
  {
    name: "N. Dheeraj",
    role: "Executive",
    phone: "9014052426",
    year: "ECE 3rd year",
    img: "/assets/Board/CICExec2.jpg"
  },
  {
    name: "T. Nikhil",
    role: "Executive",
    phone: "9063010713",
    year: "IT 3rd year",
    img: "/assets/Board/CICExec3.jpg"
  }
];


function Team() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Our Team</h1>
      </div>
      <div className="team-section1">
        <h2 className="team-title">Steering Body</h2>
        <div className="team-cards">
          {Steering.map((member, index) => (
            <TeamCard
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
              phone={member.phone}
              year={member.year}
            />
          ))}
        </div>
      </div>
      <div className="team-section2">
        <h2 className="team-title">Steering Body</h2>
        <div className="team-cards">
          {Executive.map((member, index) => (
            <TeamCard
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
              phone={member.phone}
              year={member.year}
            />
          ))}
        </div>
      </div>
      <div className="team-section1">
        <h2 className="team-title">Techical Advisory Board</h2>
        <div className="team-cards">
          {TAB.map((member, index) => (
            <TeamCard
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
              phone={member.phone}
              year={member.year}
            />
          ))}
        </div>
      </div>
      <div className="team-section2">
        <h2 className="team-title">Steering Body</h2>
        <div className="team-cards">
          {CIC.map((member, index) => (
            <TeamCard
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
              phone={member.phone}
              year={member.year}
            />
          ))}
        </div>
      </div>
      <div className="break"></div>
    </>
  );
}

export default Team;
