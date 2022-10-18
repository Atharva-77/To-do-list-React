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
    // console.log("30:-", id, !id);

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
    console.log("SUBMIT", emp, empId);

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
        leftOverEmp.push(emp);

        // setEmpDetails(leftOverEmp);
        setEmpDetails(leftOverEmp);
        navigate("/view-employees");
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

    if (buttonValue != "Update Details")
      setEmp({ ...emp, empId: e.target.value });
  };

  const firstNameHandler = (e) => {
    setEmp({ ...emp, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setEmp({ ...emp, lastName: e.target.value });
  };
  const ageHandler = (e) => {
    setEmp({ ...emp, age: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    // if (id) {
    //   console.log("hhh", e.target.value);
    // }
    // const formData = new FormData(e.target);

    {
      alert(`heloji`);
      if (id) console.log("ID Present");
      else {
        console.log("No ID", e.target.empId.value, "Q");
        setAllEmpId(new Set([...allEmpId, e.target.empId.value]));
      }

      // const formData = new FormData(e.target);
      // let empInfo = {};

      // for (let [key, value] of formData.entries()) {
      //   empInfo[key] = value;
      //   // console.log("key-val", key, value, "Obj", empInfo1);
      // }

      // console.log(empInfo);
      // setEmpDetails([...empDetails, empInfo]);
      setEmpDetails([...empDetails, emp]);
      navigate("/view-employees");
    }

    // submitForm();
  };

  const formChanges = (e) => {
    // console.log("FORM-Chnaged", e.target.form.Fname);
    let a = {};
    // e.target.name;
    // a[e.target.name] = e.target.value;
    if (e.target.name == "empId") {
      setIdPresent(false);
      console.log("hi", [...allEmpId]);

      // const seeIDUsedBefore =
      [...allEmpId].find((employeeId) => {
        console.log("148.", employeeId, e.target.value);
        if (employeeId == e.target.value) {
          setMessage("Id Already exists");
          setIdPresent(true);
          return employeeId;
        }
      });
      // console.log("SEEID", seeIDUsedBefore, seeIDUsedBefore != undefined);

      // if (seeIDUsedBefore != undefined) setIdPresent(true);
      // else setIdPresent(false);

      if (buttonValue != "Update Details")
        setEmp({ ...emp, [e.target.name]: e.target.value });
    } else {
      setEmp({ ...emp, [e.target.name]: e.target.value });
    }

    console.log("FORM-2", e.target.name, e.target.value, emp);
  };

  return (
    <div className="formDiv">
      <div className="formTitle">Employee Form</div>

      {idPresent && <span>{message}</span>}

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
            {buttonValue == "Update Details" ? (
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
          {idPresent ? (
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
