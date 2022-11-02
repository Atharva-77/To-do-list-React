import React from "react";
import PropTypes from 'prop-types';
import "./button.css";

const Button = ({ label, disabled, className }) => {
  return (
    <button disabled={disabled} type="submit" className={className}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
