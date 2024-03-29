import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";

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
  disabled: false,
  type:"text"
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange:  PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Input;
