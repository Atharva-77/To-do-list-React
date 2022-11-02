import React from "react";
import PropTypes from 'prop-types';
import LinkComponent from "../link/Link";
import "./tableRow.css";

const TableRow = ({ firstName, lastName, employeeId, age, deleteEmployee }) => {

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{employeeId}</td>
      <td>{age}</td>

      <td>
        <div className="editContainer">
          <LinkComponent path={`/update-employee/${employeeId}`} className={"link"}>
            <span className="editSpan"> Edit </span>
          </LinkComponent>
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
  employeeId: PropTypes.string,
  age: PropTypes.string,
  deleteEmployee:  PropTypes.func,
};

export default TableRow;
