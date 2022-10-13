import React, { useState } from "react";
import logo from "./logo.svg";
// import MainPg from './Pages/Unused-Pages/MainPg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Dashboard from "./Pages/Dashboard";
import ViewEmp from "./Pages/ViewEmp";
// import CallForm from './Pages/Unused-Pages/CallForm';
// import { ColorContext } from "./Components/Context";
import { EmpContext } from "./services/context/EmpContext";
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
          <Routes>
            <Route
              path="/update-employee/:id"
              element={
                <>
                  <Heading />
                  <Form />
                </>
              }
            />
            <Route
              path="/add-employee"
              element={
                <>
                  <Heading />
                  <Form />
                </>
              }
            />

            <Route
              path="/view-employees"
              element={
                <>
                  <Heading />
                  <ViewEmp />
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  <Heading />
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
