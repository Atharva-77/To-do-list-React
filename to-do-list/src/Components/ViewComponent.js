import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
// import {ColorContext} from './App'
import { ColorContext } from './Context'
import './ViewComponent.css'
//Change compo name
//Link new compo. No inline style
const ViewEachEmployee = ({firstName,lastName,empid,age}) => {

    const {empDetails,setempDetails}=useContext(ColorContext);
    const {allId,setallId}=useContext(ColorContext);

    const deleteEmployee=()=>
    {
        console.log("Deleted clicked",empid);
        console.log("emppp",empDetails);
        const leftOverEmp= empDetails.filter((i)=>
        {
            if(i.empid!=empid)
            return i;
            // console.log("Val",i.firstName);
        })
        setempDetails(leftOverEmp)
        setallId(new Set([...allId].filter(i=>i!=empid) ) );

        // const deleteEmpId=[...allId].filter((i)=>
        // {
        //     if(i!=empid)
        //      { 
        //        console.log("DELETE-ID",i);
        //          return i;
        //       }
        // })
        console.log("AA2",allId);

        // const deleteEmpId=
        // const deleteEmpId=allId.filter((i)=>
        // {
        //     // if(i.empid!=empid)
        // //    { 
        //     console.log("DELETE-ID",i);
        //     //  return i;}
        // })
        
        // setallId()
        console.log("AA",allId);
        // localStorage.removeItem(empid)
        // window.location.reload(false);

    }

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{empid}</td>
            <td>{age}</td>

            <td>
                                    
                <div className='Edit_div2'  >
                    {/* style={{ textDecoration: 'none',color:'black'}} */}
                    <Link to= {{ pathname: `/update-employee/${empid}`}} className="link" >
                        <span className='Edit_span'> Edit </span> 
                        {/* +${firstName}+${lastName}+${age} */}
                    {/* { <Form intial_Firstname={firstName}  initial_Lastname={lastName}  initial_empid={empid} initial_age={age} button_value='Update Details'/> } */}

                    </Link>
                </div>

            </td>

            <td>
                <div className="Delete_div" onClick={()=>deleteEmployee(empid)}>
                    Delete
                </div>
            </td>
        </tr>
    );
};

export default ViewEachEmployee;