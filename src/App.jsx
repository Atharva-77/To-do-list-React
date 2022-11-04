import React, { useState } from "react";
import EmployeeContext from "./services/context/EmployeeContext";
import Router from "./Router";
import "./app.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  return (
    <div className="App">
      <EmployeeContext.Provider value={{ employees, setEmployees }}>
        <Router />
      </EmployeeContext.Provider>
    </div>
  );
};
export default App;
