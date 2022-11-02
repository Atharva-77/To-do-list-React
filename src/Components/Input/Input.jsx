import React from "react";
import PropTypes from 'prop-types';
import "./input.css";

const Input = ({
  label,
  name,
  disabled,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <span className="spanElement">{label}</span>
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

Input.defaultProps = {
  disabled: false
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.node,
  onChange:  PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
