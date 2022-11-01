import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../../services/context/EmployeeContext";
import InputComponent from "../Input/Input";
import "./Form.css";
import ButtonComponent from "../button/Button";

const Form = () => {
  const navigate = useNavigate();
  const { employeeDetails, setEmployeeDetails } = useContext(EmployeeContext);
  const { id } = useParams();
  const [employeeInformation, setEmployeeInformation] = useState({});
  const [idPresentBefore, setIdPresentBefore] = useState(false);
  const isFormFilled = Object.keys(employeeInformation).length;

  useEffect(() => {
    const employee = employeeDetails.find((employee) => {
      if (employee.empId === id) {
        return employee;
      }
    });

    if (id !== undefined && employee !== undefined) {
      setEmployeeInformation(employee);
    }
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (id) {
      const UpdatedEmployee = employeeDetails.filter(
        (employee) => employee.empId !== employeeInformation.empId
      );
      UpdatedEmployee.push(employeeInformation);

      setEmployeeDetails(UpdatedEmployee);
      navigate("/view-employees");
    } else {
      setEmployeeDetails([...employeeDetails, employeeInformation]);
      navigate("/view-employees");
    }
  };

  const onChange = (e) => {
    if (e.target.name === "empId") {
      setIdPresentBefore(false);

      employeeDetails.find((employeeId) => {
        console.log("EMP-FIND", employeeId.empId);
        if (employeeId.empId === e.target.value) {
          setIdPresentBefore(true);
          return employeeId;
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
              <InputComponent
                labelName="FirstName"
                name="firstName"
                value={employeeInformation.firstName}
                onChange={onChange}
                placeholder="Enter First Name"
              />
            </div>

            <div className="inputContainer">
              <InputComponent
                labelName="LastName"
                name="lastName"
                value={employeeInformation.lastName}
                onChange={onChange}
                placeholder="Enter Last Name"
              />
            </div>

            <div className="inputContainer">
              {id ? (
                <InputComponent
                  labelName="Id"
                  disabled={true}
                  value={employeeInformation.empId}
                  name="empId"
                  onChange={onChange}
                  placeholder="Enter Employee Id"
                />
              ) : (
                <InputComponent
                  labelName="Id"
                  type="Number"
                  value={employeeInformation.empId}
                  name="empId"
                  onChange={onChange}
                  placeholder="Enter Employee Id"
                />
              )}
            </div>

            <div className="inputContainer">
              <InputComponent
                labelName="Age"
                type="Number"
                name="age"
                value={employeeInformation.age}
                onChange={onChange}
                placeholder="Enter Your age"
              />
            </div>

            {idPresentBefore || isFormFilled < 4 ? (
              <ButtonComponent lableName="Add Employee" disabled={true} />
            ) : (
              <>
                {id ? (
                  <ButtonComponent lableName="Update Details" />
                ) : (
                  <ButtonComponent lableName="Add Employee" />
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
