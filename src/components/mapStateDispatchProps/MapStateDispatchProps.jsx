import { employeeAddAction,employeeDeleteAction } from '../../redux/actions'

export const mapStateToProps = state =>
{
  return {
    employees:state.empReducer.employees
  }
}

export const mapDispatchToProps = dispatch =>
{
  return {
    employeeAddAction:(employee)=>dispatch(employeeAddAction(employee)),
    employeeDeleteAction:(employee) => dispatch(employeeDeleteAction(employee))
  }
}