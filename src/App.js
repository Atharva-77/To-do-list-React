import React, { useState } from "react";
import EmployeeContext from "./services/context/EmployeeContext";
import Router from "./Router";
import "./App.css";

const App = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);

  return (
    <div className="App">
      <EmployeeContext.Provider value={{ employeeDetails, setEmployeeDetails }}>
        <Router />
      </EmployeeContext.Provider>
    </div>
  );
};
export default App;
