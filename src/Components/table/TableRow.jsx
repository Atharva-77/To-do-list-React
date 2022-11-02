import React from "react";
import { Link } from "react-router-dom";
import "./tableRow.css";
import PropTypes from 'prop-types';

const TableRow = ({ firstName, lastName, employeeId, age, deleteEmployee }) => {

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{employeeId}</td>
      <td>{age}</td>

      <td>
        <div className="editContainer">
          <Link
            to={{ pathname: `/update-employee/${employeeId}` }}
            className="link"
          >
            <span className="editSpan"> Edit </span>
          </Link>
        </div>
      </td>

      <td>
        <div className="deleteDiv" onClick={() => deleteEmployee(employeeId)}>
          Delete
        </div>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  employeeId: PropTypes.number,
  age: PropTypes.number,
  deleteEmployee:  PropTypes.func,
};

export default TableRow;
