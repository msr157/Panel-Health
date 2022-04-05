import React from "react";
import "../styles/layout.css";
import { FaUserNurse } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar_wrapper">
      <h2>UserName</h2> <FaUserNurse className="topbar_user_icon" />
    </div>
  );
};

export default TopBar;
