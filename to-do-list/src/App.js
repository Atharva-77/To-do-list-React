      //Arrys of objs, validation for id
//hide logs, bank sapces, remove unused variables
      //New create context

      //New components
      //New branch push
//Color change
//CSS best practise
//Change css classname
      // Add link to to-d-list

//Pages & compo...
//git merge
//git conflict
//git amendment


import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainPg from './Pages/Unused-Pages/MainPg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Form from './Components/Form';
import MainDataPg from './Pages/MainDataPg';
import ViewEmp from './Pages/ViewEmp';
import CallForm from './Pages/Unused-Pages/CallForm';

// export const ColorContext=React.createContext();
import { ColorContext } from './Components/Context'
import Heading from './Components/Heading';

function App() {
  //comment these 4.
//   const [f_name,setf_name]=useState('')
//   const [l_name,setl_name]=useState('')
//   const [emp_Id,setemp_Id]=useState('')
//   const [emp_Age,setemp_Age]=useState('')
  const [empDetails,setempDetails]=useState([]) 
  const [allId,setallId]=useState(new Set())  


  {console.log(" Empdetails",empDetails);}

  return (
    <div className="App">
          {/* <a href="/" className='anchortag_heading'>
                <h2 className='Heading_div'>
                    11 To-Do-List
                </h2>
          </a> */}
           
        <ColorContext.Provider value= {{empDetails,setempDetails,allId,setallId}}>
              {/* {f_name}{l_name} */}
              <BrowserRouter >
                        <Routes>
                   
                            <Route path="/update-employee/:id" element= 
                                                {
                                                      <>
                                                            <Heading />
                                                            <Form />
                                                      </>
                                                } /> 
                            <Route path="/add-employee" element=
                                                {
                                                      <>
                                                            <Heading />
                                                            <Form />
                                                      </>
                                                } />
                                                
                            <Route path="/view-employees" element= 
                                                {
                                                      <>
                                                            <Heading />
                                                            <ViewEmp />
                                                      </>
                                                } />

                            <Route path="/" element= 
                                                {
                                                      <>
                                                            <Heading />
                                                           <MainDataPg />
                                                      </>
                                                } />
                         </Routes>
              </BrowserRouter>

         </ColorContext.Provider>
    </div>
  );
}

export default App;

// Component--> Form--> Main page
//Main pg--> Form---> Main pg--> New compo or there only