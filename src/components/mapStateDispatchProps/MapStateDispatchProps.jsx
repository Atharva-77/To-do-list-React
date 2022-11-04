import { employeeAddAction,employeeDeleteAction } from '../../redux/actions'

export const mapStateToProps = state =>
({
  employees: state.empReducer.employees
})

export const mapDispatchToProps = dispatch =>
({
    employeeAddAction:(employee)=>dispatch(employeeAddAction(employee)),
    employeeDeleteAction:(employee) => dispatch(employeeDeleteAction(employee))
})