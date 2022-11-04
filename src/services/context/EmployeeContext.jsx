import {createContext} from "react";

const EmployeeContext = createContext({employees:[], setEmployees:()=>{}});
export default EmployeeContext;
