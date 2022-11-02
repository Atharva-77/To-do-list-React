import React, { useContext } from "react";
import View from "../Components/View/View";
import EmployeeContext from "../services/context/EmployeeContext";

const ViewEmployee = () => {
  const { employeeDetails, setEmployeeDetails } = useContext(EmployeeContext);

  return (
    <table>
      {employeeDetails != "" ? (
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
            {employeeDetails.map((employee) => {
              return (
                <View
                  key={employee.employeeId}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  employeeId={employee.employeeId}
                  age={employee.age}
                />
              );
            })}
          </tbody>
        </>
      ) : (
        <h2>No Employee</h2>
      )}
    </table>
  );
};

export default ViewEmployee;
