import React, { useState } from "react";
import EmployeeContext from "./services/context/EmployeeContext";
import Router from "./Router";
import { Provider } from "react-redux";
import store from './redux/store.jsx'
import Practise from "./Practise";
import "./app.css";

const App = () => {
  // const [employees, setEmployees] = useState([]);

  return (
    <Provider store={store}>
        <div className="App">
          {/* <EmployeeContext.Provider value={{ employees, setEmployees }}> */}
        <Router />
        {/* <Practise></Practise> */}
          {/* </EmployeeContext.Provider> */}
        </div>
     </Provider>
  );
};
export default App;
