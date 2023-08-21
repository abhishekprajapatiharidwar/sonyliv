import React, { useState } from "react";
import "./Login.css";
import Signup from "./SignUp";
import Login from "./Login";

export default function LoginPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="LoginPage">
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Signup handleToggle={handleToggle} />
          </div>
          <div className="flip-card-back">
            <Login handleToggle={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
