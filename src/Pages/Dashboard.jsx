import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const Dashboard = () => {
  return (
    <div>
      <Link to={{ pathname: `/add-employee` }}>
        <Button label="Add Employee" className="buttonDashBoard"/>
      </Link>

      <Link to={{ pathname: `/view-employees` }}>
        <Button label="View Employee" className="buttonDashBoard"/>
      </Link>
    </div>
  );
};

export default Dashboard;
