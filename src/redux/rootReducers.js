import { combineReducers } from 'redux'
import tutorialReducer from './table/tableReducer'
import idReducer from './id/idReducer'


const rootReducer = combineReducers({
  table: tutorialReducer,
  id:idReducer
})

export default rootReducer