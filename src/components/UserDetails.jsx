import React, { useState } from "react";
import "../styles/userdetails.css";

const UserDetails = ({ user, onLogout }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-details">
        <div className="user-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Password:</strong> {showPassword ? user.password : "******"}
          </p>
        </div>
        <div className="password-toggle">
          <button onClick={handleShowPassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
      </div>
      <button className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserDetails;
