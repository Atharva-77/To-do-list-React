import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "./constants"

const initialState =
{
  employees: []
}

export const employeeReducer=(state=initialState, action) =>
{  
  switch (action.type) {
    case ADD_EMPLOYEE: return {
        employees: [...state.employees, action.payload]
    }
    case DELETE_EMPLOYEE: return {
      employees: action.payload
    }

    default:
      return state;
  }
}