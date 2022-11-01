import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import EmpContext from "../services/context/EmpContext";
import InputComponent from "./InputComponent";
import "./Form.css";
import ButtonComponent from "./ButtonComponent";

const Form = () => {
  const navigate = useNavigate();
  const { empDetails, setEmpDetails, allEmpId, setAllEmpId } =
    useContext(EmpContext);
  const { id } = useParams();
  const [employeeInformation, setEmployeeInformation] = useState({});
  const [idPresentBefore, setIdPresentBefore] = useState(false);
  const isFormFilled = Object.keys(employeeInformation).length;

  useEffect(() => {
    const employee = empDetails.find((employee) => {
      if (employee.empId === id) {
        return employee;
      }
    });

    if (id !== undefined && employee !== undefined) {
      setEmployeeInformation(employee);
    }
  }, [id]);

  const formHandler = (e) => {
    e.preventDefault();

    if (id) {
      const UpdatedEmployee = empDetails.filter(
        (employee) => employee.empId !== employeeInformation.empId
      );
      UpdatedEmployee.push(employeeInformation);

      setEmpDetails(UpdatedEmployee);
      navigate("/view-employees");
    } else {
      setAllEmpId(new Set([...allEmpId, e.target.empId.value]));

      setEmpDetails([...empDetails, employeeInformation]);
      navigate("/view-employees");
    }
  };

  const formChanges = (e) => {
    if (e.target.name === "empId") {
      setIdPresentBefore(false);

      [...allEmpId].find((employeeId) => {
        if (employeeId === e.target.value) {
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

        <form onSubmit={formHandler}>
          <div className="inputMainContainer">
            <div className="inputContainer">
              <InputComponent
                labelName="FirstName"
                name="firstName"
                value={employeeInformation.firstName}
                onChange={formChanges}
                placeholder="Enter First Name"
              />
            </div>

            <div className="inputContainer">
              <InputComponent
                labelName="LastName"
                name="lastName"
                value={employeeInformation.lastName}
                onChange={formChanges}
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
                  onChange={formChanges}
                  placeholder="Enter Employee Id"
                />
              ) : (
                <InputComponent
                  labelName="Id"
                  type="Number"
                  value={employeeInformation.empId}
                  name="empId"
                  onChange={formChanges}
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
                onChange={formChanges}
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
