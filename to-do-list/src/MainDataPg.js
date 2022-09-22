import React from 'react';
import { Link } from 'react-router-dom';

function MainDataPg(props) {
    return (
        <div>
            
            <Link to={{pathname:`/form`}}>
                <button className='Add-employee-button' onClick={1}>Add Employee</button>
            </Link>

              
            
            <Link to={{pathname:`/view-employees`}}>
                <button className='Add-employee-button' onClick={1}>View Employee</button>
            </Link>
              
        </div>
    );
}

export default MainDataPg;


//Take data from Parent Compo

//This is parent compo
//View Emp button here.
//Add Emp button here. After making emp, redirect to Landing page.
//Edit EMP is new pg.After editing redirect to view emp page


