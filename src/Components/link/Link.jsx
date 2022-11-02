import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './link.css'

const LinkComponent = ({path,className,children}) => {
  return (
       <Link to={{ pathname: path }} className={className}>
         {children}
       </Link>
  );
};

LinkComponent.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string
};

export default LinkComponent;