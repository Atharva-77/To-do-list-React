import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Dashboard from "./Pages/Dashboard";
import ViewEmp from "./Pages/ViewEmp";
import Heading from "./Components/Heading";

const Router = () => {
  return (
    <div>
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
    </div>
  );
};

export default Router;
