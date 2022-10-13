import React from "react";
import "./InputComponent.css";

function InputComponent({
  spanName,
  disabled_Prop = false,
  type_Prop,
  value_Prop,
  onChange_Prop,
  placeholder,
}) {
  // console.log("INP", value_Prop);
  return (
    <>
      <span id="span_Element" className="span-id-age">
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
}

export default InputComponent;
