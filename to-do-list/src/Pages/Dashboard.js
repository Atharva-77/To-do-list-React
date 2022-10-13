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

//Take data from Parent Compo

//This is parent compo
//View Emp button here.
//Add Emp button here. After making emp, redirect to Landing page.
//Edit EMP is new pg.After editing redirect to view emp page
