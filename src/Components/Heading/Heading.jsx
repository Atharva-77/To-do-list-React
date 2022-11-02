import React from "react";
import { Link } from "react-router-dom";
import "./heading.css";

const Heading = () => {
  return (
    <Link to="/" className="anchorTagHeading">
      <h2 className="headingDiv">To-Do-List</h2>
    </Link>
  );
};

export default Heading;
