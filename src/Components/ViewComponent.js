import React, { useContext } from "react";
import { Link } from "react-router-dom";
import EmpContext from "../services/context/EmpContext";
import "./ViewComponent.css";

const ViewComponent = ({ firstName, lastName, empId, age }) => {
  const { empDetails, setEmpDetails, allEmpId, setAllEmpId } =
    useContext(EmpContext);
  const deleteEmployee = () => {
    const leftOverEmp = empDetails.filter((employee) => {
      if (employee.empId != empId) return employee;
    });

    setEmpDetails(leftOverEmp);
    setAllEmpId(
      new Set([...allEmpId].filter((employeeId) => employeeId != empId))
    );
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

export default ViewComponent;
