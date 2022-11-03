import React from 'react';
import { employeeAddAction } from './redux/actions'
import { connect } from 'react-redux'

const Practise = ({ emp1, employeeAddAction }) => {
  console.log("OBJJ",emp1,JSON.stringify(emp1));
  return (
    <div>
      <h2>HII{emp1}</h2>
      {/* <input value="hi"></input> */}
      <button onClick={employeeAddAction} type="button">Submit</button>
    </div>
  );
};

// export default Practise;
const mapStateToProps = state =>
{
  return {
    emp1:state.empReducer.employees
  }
}

const mapDispatchToProps = dispatch =>
{
  return {
    employeeAddAction:()=>dispatch(employeeAddAction("hello"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practise)