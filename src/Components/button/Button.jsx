import React from "react";
import PropTypes from 'prop-types';
import "./button.css";

const Button = ({ label, disabled, type, onClick, className }) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type:"button"
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.string,
  className: PropTypes.string.isRequired
};

export default Button;
