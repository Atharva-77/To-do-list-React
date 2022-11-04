import React from "react";
import { connect } from 'react-redux'
import { mapStateToProps,mapDispatchToProps } from "../components/mapStateDispatchProps/MapStateDispatchProps.jsx";
import TableRow from "../components/table/TableRow";
import "./viewList.css";

const ViewList = ({employees,employeeDeleteAction}) => {
  const deleteEmployee = (employeeId) => {
    const leftOverEmployee = employees.filter(
      (employee) => employee.employeeId !== employeeId
    );

    employees = leftOverEmployee;
    employeeDeleteAction(employees);
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewList)