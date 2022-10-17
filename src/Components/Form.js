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
  const [emp, setEmp] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [empId, setEmpId] = useState("");
  const [age, setAge] = useState("");
  const [buttonValue, setButtonValue] = useState("Add Employee");
  const [idPresent, setIdPresent] = useState(false);
  const [message, setMessage] = useState("Id Already exists");

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
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmpId(employee.empId);
      setAge(employee.age);
    }
  }, [id]);

  const submitForm = () => {
    console.log("SUBMIT", emp);
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

        // navigate("/view-employees");
      } else {
        // console.log("EMPinfo", empInfo, "\nLEFTOVER");
        // navigate("/view-employees");
        setEmpDetails([...empDetails, emp]);
        navigate("/view-employees");
        // setEmpDetails([...empDetails, empInfo]);
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

  const handler = (a, e) => {
    console.log("HANDLER", a, e);
  };

  const firstNameHandler = (e) => {
    setEmp({ firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setEmp({ ...emp, lastName: e.target.value });
    // setLastName(e.target.value);
  };
  const ageHandler = (e) => {
    setEmp({ ...emp, age: e.target.value });
    // setAge(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(data.get("Fname"), data.get("Lname"));

    const empInfo = {
      firstName: data.get("Fname"),
      lastName: data.get("Lname"),
      empId: data.get("age"),
      age: data.get("age"),
    };

    setEmp(empInfo);
    submitForm();
    console.log(
      "FORM-HANDLER",
      e.target.value
      // "2.",
      // e.target.Fname,
      // "3.",
      // e.target.form.Fname
    );
    // console.log(
    //   "FORM-HANDLER",
    //   e,
    //   e.target.Fname,
    //   "2.",
    //   e.target.form.Fname,
    //   "=",
    //   e.target.form.Fname.value
    // );
  };

  const formChanges = (e) => {
    // console.log("FORM-Chnaged", e.target.form.Fname);
    console.log("FORM-2", e.target.form);
    // e,
    // e.target.value,)
    // e.target.form.Fname.name);
    // alert(`Hello 2`);
  };

  return (
    <div className="formDiv">
      <div className="formTitle">Employee Form</div>

      {idPresent && <span>{message}</span>}

      <form onChange={formChanges} onSubmit={(e) => formHandler(e)}>
        <div className="inputMainContainer">
          {/* <input
            className="inputTag"
            type="text"
            name="F1name"
            value={emp.firstName}
            onChange={firstNameHandler}
            placeholder="{placeholder}"
          /> */}

          <div className="inputContainer">
            <InputComponent
              labelName="FirstName"
              name="Fname"
              value={emp.firstName}
              onChange={firstNameHandler}
              placeholder="Enter First Name"
            />
          </div>

          <div className="inputContainer">
            <InputComponent
              labelName="LastName"
              name="Lname"
              value={emp.lastName}
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
              name="age"
              value={emp.age}
              onChange={ageHandler}
              placeholder="Enter Your age"
            />
          </div>

          <button
            type="submit"
            className="buttonAddUpdate"
            // onClick={submitForm}
          >
            {buttonValue}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
