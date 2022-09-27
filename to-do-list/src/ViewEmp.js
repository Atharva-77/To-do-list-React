import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {ColorContext} from './App'

const ViewEmp = () => {
  
 
    const {f_name,setf_name}=useContext(ColorContext);
    const {l_name,setl_name}=useContext(ColorContext);
    const {emp_Id,setemp_Id}=useContext(ColorContext);
    const {emp_Age,setemp_Age}=useContext(ColorContext);
    const {empDetails,setempDetails}=useContext(ColorContext);

    console.log("COLORS view",empDetails);

    let firstName,lastName,empid,age;
    const deleteEmployee=()=>
    {
        console.log("Deleted clicked",empid);
        // localStorage.removeItem(empid)
        window.location.reload(false);
    }

    {
        empDetails.map((x,y)=>
        {
            console.log(x.firstName,y);
        })
    }
    
    return (
        <div className='Mainpg_div'>
           
        
        {
            <>
                
                  <table>
                        {f_name=='' && <h2>No Employee</h2>}
                    
                        
                        {f_name !=''?
                        
                            <>
                                <tr>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Employee Id</th>
                                    <th>Age</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                        
                                <tr>
                                    <td>{f_name}</td>
                                    <td>{l_name}</td>
                                    <td>{emp_Id}</td>
                                    <td>{emp_Age}</td>
                                    {/* {} */}
                                   <td>
                                   </td>
                                    
                                    <td>
                                    
                                        <div className='Edit_div2'  >
                                            <Link to= {{ pathname: `/update-employee/${emp_Id}`}} style={{ textDecoration: 'none',color:'black'}} >
                                                <span className='Edit_span'> Edit </span> 
                                                {/* +${firstName}+${lastName}+${age} */}
                                            {/* { <Form intial_Firstname={firstName}  initial_Lastname={lastName}  initial_empid={empid} initial_age={age} button_value='Update Details'/> } */}

                                            </Link>
                                        </div>

                                    </td>

                                    <td>
                                        <div className="Delete_div" onClick={deleteEmployee}>
                                            Delete
                                        </div>
                                    </td>


                                </tr>
                            </>
                        : null

                        }
                 </table>
            </>
       
         }
        
       
    </div>
    );
};

export default ViewEmp;