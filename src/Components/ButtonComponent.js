import React from "react";
import "./ButtonComponent.css";

function ButtonComponent({ lableName, disabled = false }) {
  return (
    <>
      <button disabled={disabled} type="submit" className="buttonAddUpdate">
        {lableName}
      </button>
    </>
  );
}

export default ButtonComponent;
