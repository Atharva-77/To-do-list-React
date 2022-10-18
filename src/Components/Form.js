import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import EmpContext from "../services/context/EmpContext";
import InputComponent from "./InputComponent";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const { empDetails, setEmpDetails, allEmpId, setAllEmpId } =
    useContext(EmpContext);
  const { id } = useParams();
  const [emp, setEmp] = useState({});
  const [buttonValue, setButtonValue] = useState("Add Employee");
  const [idPresentBefore, setIdPresentBefore] = useState(false);

  useEffect(() => {
    const employee = empDetails.find((employee) => {
      if (employee.empId == id) {
        return employee;
      }
    });

    if (id != undefined && employee != undefined) {
      console.log("2.IDOFEMP", employee, !typeof employee);
      setButtonValue("Update Details");
      setEmp(employee);
    }
  }, [id]);

  const formHandler = (e) => {
    e.preventDefault();

    if (id) {
      console.log("ID Present");
      let leftOverEmp = [];
      const UpdatedEmp = empDetails.filter((employee) => {
        if (employee.empId != emp.empId) {
          leftOverEmp.push(employee);
          return employee;
        }
      });
      leftOverEmp.push(emp);

      setEmpDetails(leftOverEmp);
      console.log("UPDATED", leftOverEmp, "\nEMP", emp, "LEFTOVER");
      navigate("/view-employees");
    } else {
      console.log("No ID", e.target.empId.value, "Q");
      setAllEmpId(new Set([...allEmpId, e.target.empId.value]));

      setEmpDetails([...empDetails, emp]);
      navigate("/view-employees");
    }
  };

  const formChanges = (e) => {
    let a = {};

    if (e.target.name == "empId") {
      setIdPresentBefore(false);
      console.log("hi", [...allEmpId]);

      [...allEmpId].find((employeeId) => {
        console.log("148.", employeeId, e.target.value);
        if (employeeId == e.target.value) {
          // setMessage("Id Already exists");
          setIdPresentBefore(true);
          return employeeId;
        }
      });
    }
    setEmp({ ...emp, [e.target.name]: e.target.value });
    console.log("FORM-2", e.target.name, e.target.value, emp);
  };

  return (
    <div className="formDiv">
      <div className="formTitle">Employee Form</div>

      {idPresentBefore && <span>Id Already exists</span>}

      <form onSubmit={formHandler}>
        <div className="inputMainContainer">
          <div className="inputContainer">
            <InputComponent
              labelName="FirstName"
              name="firstName"
              value={emp.firstName}
              onChange={formChanges}
              placeholder="Enter First Name"
            />
          </div>

          <div className="inputContainer">
            <InputComponent
              labelName="LastName"
              name="lastName"
              value={emp.lastName}
              onChange={formChanges}
              placeholder="Enter Last Name"
            />
          </div>

          <div className="inputContainer">
            {id ? (
              <InputComponent
                labelName="Id"
                disabled={true}
                value={emp.empId}
                name="empId"
                onChange={formChanges}
                placeholder="Enter Employee Id"
              />
            ) : (
              <InputComponent
                labelName="Id"
                type="Number"
                value={emp.empId}
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
              value={emp.age}
              onChange={formChanges}
              placeholder="Enter Your age"
            />
          </div>
          {/* {console.log("223", Object.keys(emp).length)} */}
          {idPresentBefore || Object.keys(emp).length < 4 ? (
            <button
              disabled
              type="submit"
              className="buttonAddUpdate"
              // onClick={submitForm}
            >
              {buttonValue}
            </button>
          ) : (
            <button
              type="submit"
              className="buttonAddUpdate"
              // onClick={submitForm}
            >
              {buttonValue}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
