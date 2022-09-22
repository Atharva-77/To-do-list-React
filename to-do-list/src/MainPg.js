import React, {useState} from 'react';
import Form from './Form';
import './MainPg.css'
import { Link } from 'react-router-dom';
import TableContent from './TableContent';

function MainPg(props) {

    let i,l, keys,arr=[],val;

    l=localStorage.length
    const[renderChild, setrenderChild]=useState(false);
    const[renderChildEdit, setrenderChildEdit]=useState(false);
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [empid,setEmpid]=useState('')
    const [age,setAge]=useState('')
    
    for(i=0; i<l; i++)
    {
        keys=localStorage.key(i);
        // console.log(i,"Here value", localStorage.getItem(keys));
        // arr.push( localStorage.getItem(keys));
       
        val=localStorage.getItem(keys);
        arr.push(JSON.parse(val));
    }

    const renderFunc=()=>
    {
        // console.log("11");
        setrenderChild(true);
    }

    const parentFunc=(firstName,lastName,empid,age)=>
    {
        console.log("sdsclicked "+firstName,lastName,empid,age);
        setFirstName(firstName);
        setLastName(lastName);
        setEmpid(empid);
        setAge(age);

        setrenderChild(false)
        setrenderChildEdit(false)
    }

    const deleteEmployee=()=>
    {
        console.log("Deleted clicked",empid);
        // localStorage.removeItem(empid)
        window.location.reload(false);
    }

    return (
        <div className='Mainpg_div'>
           
            {/* <a href="/form"> */}
            {/* <Link to='/form'> */}
                 
            {/* </Link> */}
            {/* </a> */}
            
            {!renderChild && !renderChildEdit &&
                <>
                    <button className='Add-employee-button' onClick={renderFunc}>Add Employee</button>
                    <table>
                        {firstName=='' && <h2>No Employee</h2>}
                        {/* <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Employee Id</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr> */}
                        
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
                                    
                                        <div className='Edit_div2'  onClick={()=>setrenderChildEdit(true)}>
                                            {/* <Link to= {{ pathname: `/form/${empid}+${firstName}+${lastName}+${age}`}} style={{ textDecoration: 'none',color:'black'}} > */}
                                                <span className='Edit_span'> Edit </span> 
                                               
                                               {/* { <Form intial_Firstname={firstName}  initial_Lastname={lastName}  initial_empid={empid} initial_age={age} button_value='Update Details'/> } */}

                                            {/* </Link> */}
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
            {renderChild && <Form parentHandler={parentFunc}/>}
            {renderChildEdit &&<Form intial_Firstname={firstName}  initial_Lastname={lastName}  initial_empid={empid} initial_age={age} button_value='Update Details' parentHandler={parentFunc}/>}

            {/* <TableContent /> */}

            {/* <Form /> */}
           
        </div>
    );
}

export default MainPg;