import React from "react";
import LinkComponent from "../Components/link/Link.jsx";
import "./heading.css";

const Heading = () => {
  return (
    <LinkComponent path={'/'}>
       <h2 className="headingDiv">To-Do-List</h2>
    </LinkComponent>
  );
};

export default Heading;
