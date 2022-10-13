import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallForm from "./Unused-Pages/CallForm";
import Form from "../Components/Form";
import "../Pages/Dashboard.css";

function Dashboard(props) {
  return (
    <div>
      <Link to={{ pathname: `/add-employee` }}>
        <button className="Add-employee-button">Add Employee</button>
      </Link>

      <Link to={{ pathname: `/view-employees` }}>
        <button className="Add-employee-button">View Employee</button>
      </Link>
    </div>
  );
}

export default Dashboard;
