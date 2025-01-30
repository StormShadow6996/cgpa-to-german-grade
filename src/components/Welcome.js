import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"; // Ensure you have this CSS file in the same folder

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <button className="start-button">
        <Link to="/calculator" style={{ textDecoration: "none", color: "inherit" }}>
          Start
        </Link>
      </button>
    </div>
  );
};

export default Welcome;
