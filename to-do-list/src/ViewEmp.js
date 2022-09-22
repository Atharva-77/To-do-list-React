import React from 'react';
import { Link } from 'react-router-dom';

const ViewEmp = () => {

    let firstName,lastName,empid,age;
    const deleteEmployee=()=>
    {
        console.log("Deleted clicked",empid);
        // localStorage.removeItem(empid)
        window.location.reload(false);
    }
    
    return (
        <div className='Mainpg_div'>
           
        
        {
            <>
                
                  <table>
                        {firstName=='' && <h2>No Employee</h2>}
                    
                        
                        {firstName !=''?
                        
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
                                    <td>{firstName}</td>
                                    <td>{lastName}</td>
                                    <td>{empid}</td>
                                    <td>{age}</td>
                                
                                    <td>
                                    
                                        <div className='Edit_div2'  >
                                            <Link to= {{ pathname: `/form/${empid}`}} style={{ textDecoration: 'none',color:'black'}} >
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