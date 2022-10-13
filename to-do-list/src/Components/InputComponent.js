import React from "react";
import "./InputComponent.css";

const InputComponent = ({
  spanName,
  disabled_Prop = false,
  type_Prop,
  value_Prop,
  onChange_Prop,
  placeholder,
}) => {
  return (
    <>
      <span id="spanElement" className="span-id-age">
        {" "}
        {spanName}{" "}
      </span>
      {disabled_Prop == true ? (
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
      )}
    </>
  );
};

export default InputComponent;
