import React, { useContext } from "react";
import TableRow from "../Components/table/TableRow";
import EmployeeContext from "../services/context/EmployeeContext";
import "./viewList.css";

const ViewList = () => {
  const { employees,setEmployees } = useContext(EmployeeContext);
 
  const deleteEmployee = (employeeId) => {
    const leftOverEmployee = employees.filter(
      (employee) => employee.employeeId !== employeeId
    );

    setEmployees(leftOverEmployee);
  };
  return (
    <table>
      {employees.length!==0 ? (
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
            {employees.map((employee) =>
                <TableRow
                  key={employee.employeeId}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  employeeId={employee.employeeId}
                  age={employee.age}
                  deleteEmployee={deleteEmployee}
                />
            )}
          </tbody>
        </>
      ) : (
        <h2>No Employee</h2>
      )}
    </table>
  );
};

export default ViewList;
