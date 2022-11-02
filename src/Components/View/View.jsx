import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmployeeContext from "../../services/context/EmployeeContext";
import "./view.css";

const View = ({ firstName, lastName, employeeId, age }) => {
  const { employeeDetails, setEmployeeDetails } = useContext(EmployeeContext);
  const deleteEmployee = () => {
    const leftOverEmployee = employeeDetails.filter(
      (employee) => employee.employeeId !== employeeId
    );

    setEmployeeDetails(leftOverEmployee);
  };

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

export default View;
