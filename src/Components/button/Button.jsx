import React from "react";
import "./button.css";

const Button = ({ lableName, disabled = false }) => {
  return (
    <button disabled={disabled} type="submit" className="buttonAddUpdate">
      {lableName}
    </button>
  );
};

export default Button;
