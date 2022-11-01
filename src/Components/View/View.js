import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmployeeContext from "../../services/context/EmployeeContext";
import "./View.css";

const View = ({ firstName, lastName, empId, age }) => {
  const { employeeDetails, setEmployeeDetails } = useContext(EmployeeContext);
  const deleteEmployee = () => {
    const leftOverEmployee = employeeDetails.filter(
      (employee) => employee.empId !== empId
    );

    setEmployeeDetails(leftOverEmployee);
  };

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{empId}</td>
      <td>{age}</td>

      <td>
        <div className="editContainer">
          <Link to={{ pathname: `/update-employee/${empId}` }} className="link">
            <span className="editSpan"> Edit </span>
          </Link>
        </div>
      </td>

      <td>
        <div className="deleteDiv" onClick={() => deleteEmployee(empId)}>
          Delete
        </div>
      </td>
    </tr>
  );
};

export default View;
