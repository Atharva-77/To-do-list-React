import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./components/form/Form.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ViewEmployee from "./pages/ViewEmployee.jsx";
import Heading from "./components/heading/Heading.jsx";

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
