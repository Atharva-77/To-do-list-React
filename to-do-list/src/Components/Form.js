import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { EmpContext } from "../services/context/EmpContext";
import InputComponent from "./InputComponent";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();
  const { query } = useLocation();

  const { empDetails, setEmpDetails } = useContext(EmpContext);
  const { allId, setallId } = useContext(EmpContext);
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
          console.log("Val", i, j);
          return i;
        }
      });
      console.log("ID IS", idOfEmp);

      setButtonValue("Update Details");
      setfinalEmp(idOfEmp);
      setFirstName(idOfEmp.firstName);
      setLastName(idOfEmp.lastName);
      setEmpId(idOfEmp.empId);
      setAge(idOfEmp.age);

      console.log("VALues", finalEmp, finalEmp.firstName);
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
      setallId(new Set([...allId, empId]));

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
    console.log("EMPID", e.target.value);
    const seeID_Used_Before = [...allId].filter((employee_id) => {
      if (employee_id == e.target.value) {
        console.log("BEFORE-ID", employee_id);
        setMessage("Id Already exists");
        return 1;
      }
    });

    console.log("Here", seeID_Used_Before);
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
            spanName="FirstName"
            value_Prop={firstName}
            onChange_Prop={firstNameHandler}
            placeholder="Enter First Name"
          />
        </div>

        <div className="inputContainer">
          <InputComponent
            spanName="LastName"
            value_Prop={lastName}
            onChange_Prop={lastNameHandler}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="inputContainer">
          {buttonValue == "Update Details" ? (
            <InputComponent
              spanName="Id"
              disabled_Prop={true}
              value_Prop={empId}
              onChange_Prop={employeeIDHandler}
              placeholder="Enter Employee Id"
            />
          ) : (
            <InputComponent
              spanName="Id"
              type_Prop="Number"
              value_Prop={empId}
              onChange_Prop={employeeIDHandler}
              placeholder="Enter Employee Id"
            />
          )}
        </div>

        <div className="inputContainer">
          <InputComponent
            spanName="Age"
            type_Prop="Number"
            value_Prop={age}
            onChange_Prop={ageHandler}
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
