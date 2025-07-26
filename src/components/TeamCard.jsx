import React from "react";
import "./Team.css";

const TeamCard = ({ img, name, role, phone, year }) => {
  return (
    <div className="team-card">
      <img src={img} alt={name} className="team-img" />
      <div className="team-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{phone}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default TeamCard;
