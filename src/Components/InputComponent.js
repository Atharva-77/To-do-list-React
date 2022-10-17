import React from "react";
import "./InputComponent.css";

const InputComponent = ({
  labelName,
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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* {disabled_Prop ? (
        <input
          className="inputTag"
          disabled
          type={type_Prop}
          value={value_Prop}
          onChange={onChange_Prop}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="inputTag"
          type={type_Prop}
          value={value_Prop}
          onChange={onChange_Prop}
          placeholder={placeholder}
        />
      )} */}
    </>
  );
};

export default InputComponent;
