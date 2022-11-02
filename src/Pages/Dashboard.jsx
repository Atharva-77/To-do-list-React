import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Link to={{ pathname: `/add-employee` }}>
        <button className="addEmployeeButton">Add Employee</button>
      </Link>

      <Link to={{ pathname: `/view-employees` }}>
        <button className="addEmployeeButton">View Employee</button>
      </Link>
    </div>
  );
};

export default Dashboard;
