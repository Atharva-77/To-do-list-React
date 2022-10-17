import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import EmpContext from "../services/context/EmpContext";
import InputComponent from "./InputComponent";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();
  const { query } = useLocation();

  const { empDetails, setEmpDetails, allEmpId, setAllEmpId } =
    useContext(EmpContext);
  const { id } = useParams();
  const [finalEmp, setfinalEmp] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [empId, setEmpId] = useState("");
  const [age, setAge] = useState("");
  const [buttonValue, setButtonValue] = useState("Add Employee");
  const [idPresent, setIdPresent] = useState(false);
  const [message, setMessage] = useState("Id Already exists");

  useEffect(() => {
    if (id != undefined) {
      const idOfEmp = empDetails.find((i, j) => {
        if (i.empId == id) {
          return i;
        }
      });

      setButtonValue("Update Details");
      setfinalEmp(idOfEmp);
      setFirstName(idOfEmp.firstName);
      setLastName(idOfEmp.lastName);
      setEmpId(idOfEmp.empId);
      setAge(idOfEmp.age);
    }
  }, [id]);

  const submitForm = () => {
    const empInfo = {
      firstName,
      lastName,
      empId,
      age,
    };

    if (idPresent) {
      setMessage("Id already present. Please enter Different Id");
    } else {
      setAllEmpId(new Set([...allEmpId, empId]));

      if (buttonValue == "Update Details") {
        let leftOverEmp = [];
        const UpdatedEmp = empDetails.filter((employee) => {
          if (employee.empId != empId) {
            leftOverEmp.push(employee);
            return employee;
          }
        });
        leftOverEmp.push(empInfo);
        setEmpDetails(leftOverEmp);

        navigate("/view-employees");
      } else {
        navigate("/view-employees");
        setEmpDetails([...empDetails, empInfo]);
      }
    }
  };

  const employeeIDHandler = (e) => {
    const seeID_Used_Before = [...allEmpId].filter((employee_id) => {
      if (employee_id == e.target.value) {
        setMessage("Id Already exists");
        return 1;
      }
    });

    if (seeID_Used_Before.length > 0) setIdPresent(true);
    else setIdPresent(false);

    if (buttonValue != "Update Details") setEmpId(e.target.value);
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="formDiv">
      <div className="formTitle">Employee Form</div>

      {idPresent && <span>{message}</span>}

      <div className="inputMainContainer">
        <div className="inputContainer">
          <InputComponent
            labelName="FirstName"
            value={firstName}
            onChange={firstNameHandler}
            placeholder="Enter First Name"
          />
        </div>

        <div className="inputContainer">
          <InputComponent
            labelName="LastName"
            value={lastName}
            onChange={lastNameHandler}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="inputContainer">
          {buttonValue == "Update Details" ? (
            <InputComponent
              labelName="Id"
              disabled={true}
              value={empId}
              onChange={employeeIDHandler}
              placeholder="Enter Employee Id"
            />
          ) : (
            <InputComponent
              labelName="Id"
              type="Number"
              value={empId}
              onChange={employeeIDHandler}
              placeholder="Enter Employee Id"
            />
          )}
        </div>

        <div className="inputContainer">
          <InputComponent
            labelName="Age"
            type="Number"
            value={age}
            onChange={ageHandler}
            placeholder="Enter Your age"
          />
        </div>

        <button className="buttonAddUpdate" onClick={submitForm}>
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default Form;
