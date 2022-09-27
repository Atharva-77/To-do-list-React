//Arrys of objs, validation for id
//hide logs, bank sapces, remove unused variables
//New create context
//New components
//New branch push
//Color change
//CSS best practise

import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './MainPg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Form from './Form';
import MainDataPg from './MainDataPg';
import ViewEmp from './ViewEmp';
import CallForm from './CallForm';

export const ColorContext=React.createContext("hello");

function App() {
  
  const [f_name,setf_name]=useState('')
  const [l_name,setl_name]=useState('')
  const [emp_Id,setemp_Id]=useState('')
  const [emp_Age,setemp_Age]=useState('')
  const [empDetails,setempDetails]=useState([])  
  

  {console.log("Color",f_name,l_name," Empdetails",empDetails);}

  return (
    <div className="App">
          <a href="/" className='Anchortag_heading'>
                <h2 className='Heading_div'>
                    To-Do-List
                </h2>
          </a>

        <ColorContext.Provider value= {{f_name,setf_name, l_name,setl_name, emp_Id,setemp_Id, emp_Age,setemp_Age,empDetails,setempDetails}}>
              {/* {f_name}{l_name} */}
              <BrowserRouter >
                    <Routes>
                            <Route path="/update-employee/:id" element={<Form />} />
                            <Route path="/add-employee" element={<Form />} />

                            <Route path="/view-employees" element={<ViewEmp />} />

                            <Route path="/" element={<MainDataPg />} />
                    </Routes>
              </BrowserRouter>

         </ColorContext.Provider>
    </div>
  );
}

export default App;

// Component--> Form--> Main page
//Main pg--> Form---> Main pg--> New compo or there only