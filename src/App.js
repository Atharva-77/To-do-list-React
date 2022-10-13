import React, { useState } from "react";
import logo from "./logo.svg";
import EmpContext from "./services/context/EmpContext";
import "./App.css";
import Router from "./Router";

const App = () => {
  const [empDetails, setEmpDetails] = useState([]);
  const [allId, setallId] = useState(new Set());

  return (
    <div className="App">
      <EmpContext.Provider
        value={{ empDetails, setEmpDetails, allId, setallId }}
      >
        <Router />
      </EmpContext.Provider>
    </div>
  );
};
export default App;
