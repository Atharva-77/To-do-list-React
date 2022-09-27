import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {ColorContext} from './App'
import ViewEachEmployee from './ViewEachEmployee';

const ViewEmp = () => {
  
 
    const {f_name,setf_name}=useContext(ColorContext);
    const {l_name,setl_name}=useContext(ColorContext);
    const {emp_Id,setemp_Id}=useContext(ColorContext);
    const {emp_Age,setemp_Age}=useContext(ColorContext);
    const {empDetails,setempDetails}=useContext(ColorContext);
    const {allId,setallId}=useContext(ColorContext);

    console.log("COLORS view",typeof(empDetails),allId);

    let firstName,lastName,empid,age;
    const deleteEmployee=()=>
    {
        console.log("Deleted clicked",empid);
        // localStorage.removeItem(empid)
        window.location.reload(false);
    }

    {
        // empDetails.map((x,y)=>
        // {
        //     console.log(x.firstName,y);
        // })
    }
    
    return (
        <div className='Mainpg_div'>
           
        
        {
            <>
               
                  <table>
                        {empDetails=='' && <h2>No Employee</h2>}
                    
                        
                        {empDetails !=''?
                        
                            <>
                                <tr>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Employee Id</th>
                                    <th>Age</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                        
                                <>
                                    { empDetails.map((i,y)=>
                                        {
                                                return <>
                                                    <ViewEachEmployee 
                                                    firstName={i.firstName} 
                                                    lastName={i.lastName} 
                                                    empid={i.empid} 
                                                    age={i.age}/>
                                                </>
                                                
                                        })
                                    }
                                    
                                    {/* <td>{f_name}</td>
                                    <td>{l_name}</td>
                                    <td>{emp_Id}</td>
                                    <td>{emp_Age}</td> */}
                                
                                    
                                    {/* <td>
                                    
                                        <div className='Edit_div2'  >
                                            <Link to= {{ pathname: `/update-employee/${emp_Id}`}} style={{ textDecoration: 'none',color:'black'}} >
                                                <span className='Edit_span'> Edit </span> 

                                            </Link>
                                        </div>

                                    </td>

                                    <td>
                                        <div className="Delete_div" onClick={deleteEmployee}>
                                            Delete
                                        </div>
                                    </td> */}


                                </>
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