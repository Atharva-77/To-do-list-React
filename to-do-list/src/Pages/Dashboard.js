import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallForm from "./Unused-Pages/CallForm";
import Form from "../Components/Form";
import "../Pages/Dashboard.css";

const Dashboard = (props) => {
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
