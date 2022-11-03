import React, { useContext } from "react";
import { connect } from 'react-redux'
import { employeeAddAction, employeeDeleteAction } from '../redux/actions'

import TableRow from "../components/table/TableRow";
import EmployeeContext from "../services/context/EmployeeContext";
import "./viewList.css";

const ViewList = ({employees,employeeAddAction,employeeDeleteAction}) => {
  // const { employees,setEmployees } = useContext(EmployeeContext);
 
  const deleteEmployee = (employeeId) => {
    const leftOverEmployee = employees.filter(
      (employee) => employee.employeeId !== employeeId
    );
    // console.log("Deleted", leftOverEmployee);
    employees = leftOverEmployee;
    employeeDeleteAction(employees);
    console.log("employees",employees);
    // setEmployees(leftOverEmployee);
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
    employeeAddAction: (employee) => dispatch(employeeAddAction(employee)),
    employeeDeleteAction:(employee) => dispatch(employeeDeleteAction(employee))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewList)
// export default ViewList;
