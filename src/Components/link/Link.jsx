import React from 'react';
import { Link } from "react-router-dom";
import './link.css'

const LinkComponent = ({path,className,children}) => {
  return (
       <Link to={{ pathname: path }} className={className}>
         {children}
       </Link>
  );
};

export default LinkComponent;