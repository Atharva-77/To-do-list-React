import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { connect } from 'react-redux'
import { employeeAddAction } from '../../redux/actions'
import Input from "../input/Input";
import Button from "../button/Button";
import "./employeeForm.css";

const EmployeeForm = ({employees,employeeAddAction}) => {
  const [employeeInformation, setEmployeeInformation] = useState({});
  const [idPresentBefore, setIdPresentBefore] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isFormFilled = Object.keys(employeeInformation).length;

  useEffect(() => {
    const employee = employees.find(
      (employee) => employee.employeeId === id
    );
    if (id !== undefined ) {
      setEmployeeInformation(employee);
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (id) {
      const existingEmployeeIndex = employees.findIndex(
        (employee) => employee.employeeId === employeeInformation.employeeId
      );    
      
      employees[existingEmployeeIndex] = employeeInformation;
      navigate("/view-employees");
    } else {
      employeeAddAction(employeeInformation)
      navigate("/view-employees");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "employeeId") {
      setIdPresentBefore(false);
      
      employees.some((employee) => {
        if (employee.employeeId === e.target.value) {
          setIdPresentBefore(true);
        }
      });
    }
    setEmployeeInformation({
      ...employeeInformation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="formContainer">
      <div className="formDiv">
        <div className="formTitle">Employee Form</div>

        {idPresentBefore && <span>Id Already exists</span>}

        <form onSubmit={onSubmit}>
          <div className="inputMainContainer">
            <div className="inputContainer">
              <Input
                label="FirstName"
                name="firstName"
                value={employeeInformation.firstName}
                onChange={onChange}
                placeholder="Enter First Name"
              />
            </div>

            <div className="inputContainer">
              <Input
                label="LastName"
                name="lastName"
                value={employeeInformation.lastName}
                onChange={onChange}
                placeholder="Enter Last Name"
              />
            </div>

            <div className="inputContainer">
                <Input
                  label="Id"
                  disabled={id ? true : false}
                  value={employeeInformation.employeeId}
                  name="employeeId"
                  onChange={onChange}
                  placeholder="Enter Employee Id"
                />
            </div>

            <div className="inputContainer">
              <Input
                label="Age"
                type="Number"
                name="age"
                value={employeeInformation.age}
                onChange={onChange}
                placeholder="Enter Your age"
              />
            </div>

            <Button disabled={idPresentBefore || isFormFilled < 4 ? true : false} label={id ? "Update Details" : "Add Employee"} type="submit" className="buttonForm"/>
          </div>
        </form>
      </div>
    </div>
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
    employeeAddAction:(employee)=>dispatch(employeeAddAction(employee))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)