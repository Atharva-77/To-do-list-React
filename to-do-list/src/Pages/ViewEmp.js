import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
// import {ColorContext} from './App'
import ViewComponent from '../Components/ViewComponent';
import { ColorContext } from '../Components/Context'

const ViewEmp = () => {
  
    const {empDetails,setempDetails}=useContext(ColorContext);
    const {allId,setallId}=useContext(ColorContext);
    

    return (
        <div className='ViewEmp'>
           
        
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
                                    {/* Change i name. Use body , header in table */}
                                        { empDetails.map((i,y)=>
                                            {
                                                    return <>
                                                        <ViewComponent 
                                                        firstName={i.firstName} 
                                                        lastName={i.lastName} 
                                                        empid={i.empid} 
                                                        age={i.age}/>
                                                    </>
                                                    
                                            })
                                        }
                                        

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