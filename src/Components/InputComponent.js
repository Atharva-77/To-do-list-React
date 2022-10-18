import React from "react";
import "./InputComponent.css";

const InputComponent = ({
  labelName,
  name,
  disabled = false,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <span id="spanElement" className="span-id-age">
        {" "}
        {labelName}{" "}
      </span>
      <input
        className="inputTag"
        disabled={disabled}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputComponent;
