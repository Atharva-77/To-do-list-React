import React from 'react';
import { Link } from 'react-router-dom';
import './TableContent.css'
import Form from './Form';

function TableContent({firstName,lastName,empid,age}) {


    const deleteEmployee=()=>
    {
        console.log("Deleted clicked",empid);
        localStorage.removeItem(empid)
        window.location.reload(false);
    }
    return (
        <div className='TableContent'>
            {/* {firstName +"."+lastName+"." +empid+"." +age} */}
            <div className='TableContent_details'>
                    <div>
                        <div className='Table-headings'>FirstName</div>
                        <div>{firstName}</div>
                    </div>

                    <div>
                        <div className='Table-headings'>LastName</div>
                        <div>{lastName}</div>
                    </div>
                    
                    <div>
                        <div className='Table-headings'>Employee Id</div>
                        <div>{empid}</div>
                    </div>
                    
                    <div>
                        <div className='Table-headings'>Age</div>
                        <div>{age}</div>
                    </div>
            </div>

            <div className='Edit_delete_div'>
                
                <div className='Edit_div'>
                    <Link to= {{ pathname: `/form/${empid}`}} style={{ textDecoration: 'none',color:'black'}} >
                         <span className='Edit_span'> Edit </span>
                         
                    </Link>
                   
                </div>
                
                <div className="Delete_div" onClick={deleteEmployee}>
                    Delete
                </div>

            </div>
           
        </div>
    );
}

export default TableContent;