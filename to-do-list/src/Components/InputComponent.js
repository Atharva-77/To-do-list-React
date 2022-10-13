import React from "react";
import "./InputComponent.css";

function InputComponent({
  className_Prop,
  spanName,
  spanClassName,
  disabled_Prop = false,
  type_Prop,
  value_Prop,
  onChange_Prop,
  placeholder,
}) {
  // console.log("INP", value_Prop);
  return (
    <>
      <span id="span_Element" className={spanClassName}>
        {" "}
        {spanName}{" "}
      </span>
      {disabled_Prop == true ? (
        <input
          className={className_Prop}
          disabled
          type={type_Prop}
          value={value_Prop}
          onChange={onChange_Prop}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={className_Prop}
          type={type_Prop}
          value={value_Prop}
          onChange={onChange_Prop}
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export default InputComponent;
