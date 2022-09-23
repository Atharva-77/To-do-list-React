import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CallForm from './CallForm';
import Form from './Form';


export const ColorContext=React.createContext();

function MainDataPg(props) {

    // export const EmpDetails=React.createContext({

    // })

    // const [color,setcolor]=useState('yellow')
    // const [color2,setcolor2]=useState('GREEN')
    // {console.log("Color",color,color2);}

    return (
        <div>
               
               {/* <ColorContext.Provider value= {{color,setcolor,color2,setcolor2}}> */}
                  <Link to={{pathname:`/add-employee`}}>
                    <button className='Add-employee-button' >Add Employee</button>
                    {/* <Form  value= {{color,setcolor,color2,setcolor2}}/>     */}
                  </Link>
                  {/* <Form /> */}
               {/* </ColorContext.Provider> */}

                <Link to={{pathname:`/view-employees`}}>
                    <button className='Add-employee-button' >View Employee</button>
                    {/* <Form />     */}
                  </Link>

              
            {/* <ColorContext.Provider value= {{color,setcolor,color2,setcolor2}}>
                  <Link to={{pathname:`/view-employees`}}>
                    <button className='Add-employee-button' onClick={1}>View Employee</button>
                    <Form />    
                  </Link>
            </ColorContext.Provider> */}
            {/* <Link to={{pathname:`/view-employees`}}> */}
                {/* <button className='Add-employee-button' onClick={1}>View Employee</button> */}
            {/* </Link> */}
              
        </div>
    );
}

export default MainDataPg;


//Take data from Parent Compo

//This is parent compo
//View Emp button here.
//Add Emp button here. After making emp, redirect to Landing page.
//Edit EMP is new pg.After editing redirect to view emp page


