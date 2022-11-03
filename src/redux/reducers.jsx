const initialState =
{
  employees: []
}

export const employeeReducer=(state=initialState, action) =>
{
  // console.log("REDUCERS", action.payload)
  
  switch (action.type) {
    case "ADD_EMPLOYEE": return {
      // ...state,
      employees:
        [...state.employees,action.payload]
        // state.employees +" "+ (action.payload)
    }
    case "DELETE_EMPLOYEE": return {
      // ...state,
      employees:
        action.payload
        // state.employees +" "+ (action.payload)
    }

    default:
      return state;

  }
}