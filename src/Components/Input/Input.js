import React from "react";
import "./Input.css";

const Input = ({
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
      <span className="spanElement">{labelName}</span>
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

export default Input;
