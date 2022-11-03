import { combineReducers,legacy_createStore as createStore , applyMiddleware } from 'redux'
import { employeeReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  empReducer: employeeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;