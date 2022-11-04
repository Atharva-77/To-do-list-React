import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from "./constants"

const addEmployee = (data) =>
({
  type: ADD_EMPLOYEE,
  payload: data
})

const deleteEmployee = (data) =>
({
  type: DELETE_EMPLOYEE,
  payload: data
})

export const employeeAddAction = (data) =>
(
   ((dispatch) => dispatch(addEmployee(data)))
)

export const employeeDeleteAction = (data) =>
(
  ((dispatch) => dispatch(deleteEmployee(data)))
)

