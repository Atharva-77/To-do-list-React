import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../../services/context/EmployeeContext";
import Input from "../input/Input";
import Button from "../button/Button";
import "./employeeForm.css";

const EmployeeForm = () => {
  const [employeeInformation, setEmployeeInformation] = useState({});
  const [idPresentBefore, setIdPresentBefore] = useState(false);
  const { employees, setEmployees } = useContext(EmployeeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const isFormFilled = Object.keys(employeeInformation).length;

  useEffect(() => {
    const employee = employees.find(
      (employee) => employee.employeeId === id
    );
    if (id !== undefined && employee !== undefined) {
      setEmployeeInformation(employee);
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const updatedEmployee = employees.filter(
        (employee) => employee.employeeId !== employeeInformation.employeeId
      );
      updatedEmployee.push(employeeInformation);

      setEmployees(updatedEmployee);
      navigate("/view-employees");
    } else {
      setEmployees([...employees, employeeInformation]);
      navigate("/view-employees");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "employeeId") {
      setIdPresentBefore(false);

      employees.find((employee) => {
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

            <Button disabled={idPresentBefore || isFormFilled < 4 ? true : false} label={id ? "Update Details" : "Add Employee"} className="buttonForm"/>
          </div>
        </form>
      </div>
    </div>
  );
};


export default EmployeeForm;
