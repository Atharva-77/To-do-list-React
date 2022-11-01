import React, { useState } from "react";
import EmpContext from "./services/context/EmpContext";
import Router from "./Router";
import "./App.css";

const App = () => {
  const [empDetails, setEmpDetails] = useState([]);
  const [allEmpId, setAllEmpId] = useState(new Set());

  return (
    <div className="App">
      <EmpContext.Provider
        value={{ empDetails, setEmpDetails, allEmpId, setAllEmpId }}
      >
        <Router />
      </EmpContext.Provider>
    </div>
  );
};
export default App;
