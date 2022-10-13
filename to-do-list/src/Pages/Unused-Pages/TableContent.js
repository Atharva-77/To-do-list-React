import React from "react";
import { Link } from "react-router-dom";
import "./TableContent.css";
import Form from "../../Components/Form";

function TableContent({ firstName, lastName, empid, age }) {
  const deleteEmployee = () => {
    console.log("Deleted clicked", empid);
    localStorage.removeItem(empid);
    window.location.reload(false);
  };
  return (
    // <div className='1TableContent'>

    <>
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{empid}</td>
        <td>{age}</td>

        <td>
          <div className="Edit_div2">
            <Link
              to={{ pathname: `/form/${empid}` }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="editSpan"> Edit </span>
            </Link>
          </div>
        </td>

        <td>
          <div className="deleteDiv" onClick={deleteEmployee}>
            Delete
          </div>
        </td>
      </tr>
    </>
  );
}

export default TableContent;

//  {/* {firstName +"."+lastName+"." +empid+"." +age} */}
//  <div className='TableContent_details'>
//  <div>
//      <div className='Table-headings'>FirstName</div>
//      <div>{firstName}</div>
//  </div>

//  <div>
//      <div className='Table-headings'>LastName</div>
//      <div>{lastName}</div>
//  </div>

//  <div>
//      <div className='Table-headings'>Employee Id</div>
//      <div>{empid}</div>
//  </div>

//  <div>
//      <div className='Table-headings'>Age</div>
//      <div>{age}</div>
//  </div>
// </div>

// <div className='Edit_deleteDiv'>

// <div className='Edit_div'>
//  <Link to= {{ pathname: `/form/${empid}`}} style={{ textDecoration: 'none',color:'black'}} >
//       <span className='editSpan'> Edit </span>

//  </Link>

// </div>

// <div className="deleteDiv" onClick={deleteEmployee}>
//  Delete
// </div>

// </div>
