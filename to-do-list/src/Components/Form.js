import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { EmpContext } from "../services/context/EmpContext";
import InputComponent from "./InputComponent";
import "./Form.css";

function Form() {
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
  const [button_Value, setButton_value] = useState("Add Employee");
  const [idpresent, setidpresent] = useState(false);
  const [message, setmessage] = useState("Id Already exists");

  useEffect(() => {
    if (id != undefined) {
      const idOfEmp = empDetails.find((i, j) => {
        if (i.empId == id) {
          console.log("Val", i, j);
          return i;
        }
      });
      console.log("ID IS", idOfEmp);

      setButton_value("Update Details");
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

    if (idpresent) {
      setmessage("Id already present. Please enter Different Id");
    } else {
      setallId(new Set([...allId, empId]));

      if (button_Value == "Update Details") {
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

  const employeeIDFunc = (e) => {
    console.log("EMPID", e.target.value);
    const seeID_Used_Before = [...allId].filter((employee_id) => {
      if (employee_id == e.target.value) {
        console.log("BEFORE-ID", employee_id);
        setmessage("Id Already exists");
        return 1;
      }
    });

    console.log("Here", seeID_Used_Before);
    if (seeID_Used_Before.length > 0) setidpresent(true);
    else setidpresent(false);

    if (button_Value != "Update Details") setEmpId(e.target.value);
  };

  const firstNameFunc = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameFunc = (e) => {
    setLastName(e.target.value);
  };
  const ageFunc = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="form_Div">
      <div className="form_Title">Employee Form</div>

      {idpresent && <span>{message}</span>}

      <div className="input_Main_Container">
        <div className="input_Container">
          <InputComponent
            spanName="FirstName"
            value_Prop={firstName}
            onChange_Prop={firstNameFunc}
            placeholder="Enter First Name"
          />
        </div>

        <div className="input_Container">
          <InputComponent
            spanName="LastName"
            value_Prop={lastName}
            onChange_Prop={lastNameFunc}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="input_Container">
          {button_Value == "Update Details" ? (
            <InputComponent
              spanName="Id"
              disabled_Prop={true}
              value_Prop={empId}
              onChange_Prop={employeeIDFunc}
              placeholder="Enter Employee Id"
            />
          ) : (
            <InputComponent
              spanName="Id"
              type_Prop="Number"
              value_Prop={empId}
              onChange_Prop={employeeIDFunc}
              placeholder="Enter Employee Id"
            />
          )}
        </div>

        <div className="input_Container">
          <InputComponent
            spanName="Age"
            type_Prop="Number"
            value_Prop={age}
            onChange_Prop={ageFunc}
            placeholder="Enter Your age"
          />
        </div>

        <button className="button-add-update" onClick={submitForm}>
          {button_Value}
        </button>
      </div>
    </div>
  );
}

export default Form;
