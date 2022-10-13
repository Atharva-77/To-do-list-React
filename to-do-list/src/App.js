import React, { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Dashboard from "./Pages/Dashboard";
import ViewEmp from "./Pages/ViewEmp";
import EmpContext from "./services/context/EmpContext";
import Heading from "./Components/Heading";
import "./App.css";

const App = () => {
  const [empDetails, setEmpDetails] = useState([]);
  const [allId, setallId] = useState(new Set());

  return (
    <div className="App">
      <EmpContext.Provider
        value={{ empDetails, setEmpDetails, allId, setallId }}
      >
        <BrowserRouter>
          <Heading />
          <Routes>
            <Route
              path="/update-employee/:id"
              element={
                <>
                  <Form />
                </>
              }
            />
            <Route
              path="/add-employee"
              element={
                <>
                  <Form />
                </>
              }
            />

            <Route
              path="/view-employees"
              element={
                <>
                  <ViewEmp />
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </EmpContext.Provider>
    </div>
  );
};
export default App;
