import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Components/form/Form";
import Dashboard from "./Pages/Dashboard";
import ViewEmployee from "./Pages/ViewEmployee";
import Heading from "./Components/Heading/Heading";

const Router = () => {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/update-employee/:id" element={<Form />} />
        <Route path="/add-employee" element={<Form />} />
        <Route path="/view-employees" element={<ViewEmployee />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
