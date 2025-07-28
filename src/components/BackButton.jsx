import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Go back one step in history
      style={{
        marginTop: "40px",
        padding: "10px 20px",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: "#ffc107", // matching your yellow theme
        border: "none",
        color: "#222",
        fontWeight: "600",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}

export default BackButton;