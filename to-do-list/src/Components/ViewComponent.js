import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EmpContext } from "../services/context/EmpContext";
import "./ViewComponent.css";

const ViewComponent = ({ firstName, lastName, empId, age }) => {
  const { empDetails, setEmpDetails } = useContext(EmpContext);
  const { allId, setallId } = useContext(EmpContext);

  const deleteEmployee = () => {
    const leftOverEmp = empDetails.filter((i) => {
      if (i.empId != empId) return i;
    });

    setEmpDetails(leftOverEmp);
    setallId(new Set([...allId].filter((i) => i != empId)));
  };

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{empId}</td>
      <td>{age}</td>

      <td>
        <div className="edit_Container">
          <Link to={{ pathname: `/update-employee/${empId}` }} className="link">
            <span className="edit_Span"> Edit </span>
          </Link>
        </div>
      </td>

      <td>
        <div className="delete_Div" onClick={() => deleteEmployee(empId)}>
          Delete
        </div>
      </td>
    </tr>
  );
};

export default ViewComponent;
