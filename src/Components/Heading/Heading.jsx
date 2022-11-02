import React from "react";
import LinkComponent from "../link/Link";
import "./heading.css";

const Heading = () => {
  return (
    <LinkComponent path={'/'} className="link">
       <h2 className="headingDiv">To-Do-List</h2>
    </LinkComponent>
  );
};

export default Heading;
