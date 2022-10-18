import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ViewComponent from "../Components/ViewComponent";
import EmpContext from "../services/context/EmpContext";

const ViewEmp = () => {
  const { empDetails, setEmpDetails } = useContext(EmpContext);

  return (
    <div className="ViewEmp">
      {
        <>
          <table>
            {empDetails == "" && <h2>No Employee</h2>}

            {empDetails != "" ? (
              <>
                <thead>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Employee Id</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {/* Change i name. Use body , header in table */}
                  {empDetails.map((employee) => {
                    return (
                      <>
                        <ViewComponent
                          firstName={employee.firstName}
                          lastName={employee.lastName}
                          empId={employee.empId}
                          age={employee.age}
                        />
                      </>
                    );
                  })}
                </tbody>
              </>
            ) : null}
          </table>
        </>
      }
    </div>
  );
};

export default ViewEmp;
