import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../../services/context/EmployeeContext";
import Input from "../Input/Input";
import Button from "../button/Button";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();
  const { employeeDetails, setEmployeeDetails } = useContext(EmployeeContext);
  const { id } = useParams();
  const [employeeInformation, setEmployeeInformation] = useState({});
  const [idPresentBefore, setIdPresentBefore] = useState(false);
  const isFormFilled = Object.keys(employeeInformation).length;

  useEffect(() => {
    const employee = employeeDetails.find(
      (employee) => employee.employeeId === id
    );
    if (id !== undefined && employee !== undefined) {
      setEmployeeInformation(employee);
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const updatedEmployee = employeeDetails.filter(
        (employee) => employee.employeeId !== employeeInformation.employeeId
      );
      updatedEmployee.push(employeeInformation);

      setEmployeeDetails(updatedEmployee);
      navigate("/view-employees");
    } else {
      setEmployeeDetails([...employeeDetails, employeeInformation]);
      navigate("/view-employees");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "employeeId") {
      setIdPresentBefore(false);

      employeeDetails.find((employee) => {
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
    <div className="formDivContainer">
      <div className="formDiv">
        <div className="formTitle">Employee Form</div>

        {idPresentBefore && <span>Id Already exists</span>}

        <form onSubmit={onSubmit}>
          <div className="inputMainContainer">
            <div className="inputContainer">
              <Input
                labelName="FirstName"
                name="firstName"
                value={employeeInformation.firstName}
                onChange={onChange}
                placeholder="Enter First Name"
              />
            </div>

            <div className="inputContainer">
              <Input
                labelName="LastName"
                name="lastName"
                value={employeeInformation.lastName}
                onChange={onChange}
                placeholder="Enter Last Name"
              />
            </div>

            <div className="inputContainer">
              {id ? (
                <Input
                  labelName="Id"
                  disabled={true}
                  value={employeeInformation.employeeId}
                  name="employeeId"
                  onChange={onChange}
                  placeholder="Enter Employee Id"
                />
              ) : (
                <Input
                  labelName="Id"
                  type="Number"
                  value={employeeInformation.employeeId}
                  name="employeeId"
                  onChange={onChange}
                  placeholder="Enter Employee Id"
                />
              )}
            </div>

            <div className="inputContainer">
              <Input
                labelName="Age"
                type="Number"
                name="age"
                value={employeeInformation.age}
                onChange={onChange}
                placeholder="Enter Your age"
              />
            </div>

            {idPresentBefore || isFormFilled < 4 ? (
              <Button lableName="Add Employee" disabled={true} />
            ) : (
              <>
                {id ? (
                  <Button lableName="Update Details" />
                ) : (
                  <Button lableName="Add Employee" />
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
