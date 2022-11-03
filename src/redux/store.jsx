import { combineReducers,legacy_createStore as createStore , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { employeeReducer } from './reducers'

const rootReducer = combineReducers({
  empReducer: employeeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;