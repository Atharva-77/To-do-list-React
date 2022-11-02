import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeForm from "./components/form/EmployeeForm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ViewList from "./pages/ViewList.jsx";
import Heading from "./components/heading/Heading.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Heading />
      <Routes>
        <Route path="/update-employee/:id" element={<EmployeeForm />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/view-employees" element={<ViewList />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
