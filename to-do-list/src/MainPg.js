import React from 'react';
import Form from './Form';
import './MainPg.css'
import { Link } from 'react-router-dom';
import TableContent from './TableContent';

function MainPg(props) {

    let i,l, keys,arr=[],val;

    l=localStorage.length
    
    for(i=0; i<l; i++)
    {
        keys=localStorage.key(i);
        // console.log(i,"Here value", localStorage.getItem(keys));
        // arr.push( localStorage.getItem(keys));
       
        val=localStorage.getItem(keys);
        arr.push(JSON.parse(val));
    }

    return (
        <div className='Mainpg_div'>
           
            {/* <a href="/form"> */}
            <Link to='/form'>
                 <button className='Add-employee-button'>Add Employee</button>
            </Link>
            {/* </a> */}
            <table>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Employee Id</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    arr.map((i,b)=>
                    {
                        return <TableContent
                                key={i.empid}
                                
                                firstName={i.firstName}
                                lastName={i.lastName}
                                empid={i.empid}
                                age={i.age}
                        />
                        // console.log("MAP",a,b, a.age);
                    })
                }
            </table>

 

            {/* <TableContent /> */}

            {/* <Form /> */}
           
        </div>
    );
}

export default MainPg;