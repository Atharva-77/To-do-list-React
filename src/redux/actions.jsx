const addEmployee = (data) =>
{
  return {
    type: "ADD_EMPLOYEE",
    payload: data
  }
}
const deleteEmployee = (data) =>
{
  return {
    type: "DELETE_EMPLOYEE",
    payload: data
  }
}
export const employeeAddAction = (data) =>
{
  return (dispatch) => {
    // console.log("ACT-DATA",data);
    dispatch(addEmployee(data))
    
  }
}

export const employeeDeleteAction = (data) =>
{
  return (dispatch) => {
    console.log("ACT-DATA",data);
    dispatch(deleteEmployee(data))
    
  }
}
// export const employeeDeleteAction = () =>async(dispatch)=>
// {
 
// }
