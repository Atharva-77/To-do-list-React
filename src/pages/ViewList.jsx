import React from "react";
import { connect } from 'react-redux'
import { employeeDeleteAction } from '../redux/actions'
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

const mapStateToProps = state =>
{
  return {
    employees:state.empReducer.employees
  }
}

const mapDispatchToProps = dispatch =>
{
  return {
    employeeDeleteAction:(employee) => dispatch(employeeDeleteAction(employee))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewList)