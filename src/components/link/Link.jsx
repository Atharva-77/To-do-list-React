import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './link.css'

const LinkComponent = ({path,children}) => {
  return (
       <Link to={{ pathname: path }} className="link">
         {children}
       </Link>
  );
};

LinkComponent.defaultProps = {
  path: "/"
}

LinkComponent.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default LinkComponent;