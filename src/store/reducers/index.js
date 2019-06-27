import { combineReducers } from 'redux'
// 
import headerReducer from './headerReducer'
import appReducer from './appReducer'
// 
const rootReducer = combineReducers(
    {
        app: appReducer,
        header : headerReducer,
    }
)
export default rootReducer