import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from './Context'
import './ViewComponent.css'

const ViewComponent = ({firstName,lastName,empid,age}) => {

    const {empDetails,setempDetails}=useContext(ColorContext);
    const {allId,setallId}=useContext(ColorContext);

    const deleteEmployee=()=>
    {
      
        const leftOverEmp= empDetails.filter((i)=>
        {
            if(i.empid!=empid)
            return i;
  
        })

        setempDetails(leftOverEmp)
        setallId(new Set([...allId].filter(i=>i!=empid) ) );


    }

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{empid}</td>
            <td>{age}</td>

            <td>
                                    
                <div className='edit_Container'  >
                    <Link to= {{ pathname: `/update-employee/${empid}`}} className="link" >
                        <span className='edit_Span'> Edit </span> 
                    </Link>
                </div>

            </td>

            <td>
                <div className="delete_Div" onClick={()=>deleteEmployee(empid)}>
                    Delete
                </div>
                
            </td>
        </tr>
    );
};

export default ViewComponent;