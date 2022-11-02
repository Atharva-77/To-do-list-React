import React from "react";
import PropTypes from 'prop-types';

import "./button.css";

const Button = ({ label, disabled }) => {
  return (
    <button disabled={disabled} type="submit" className="buttonAddUpdate">
      {label}
    </button>
  );
};

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default Button;
