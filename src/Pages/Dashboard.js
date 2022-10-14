import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Link to={{ pathname: `/add-employee` }}>
        <button className="AddEmployeeButton">Add Employee</button>
      </Link>

      <Link to={{ pathname: `/view-employees` }}>
        <button className="AddEmployeeButton">View Employee</button>
      </Link>
    </div>
  );
};

export default Dashboard;
