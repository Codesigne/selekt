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
// export function selectList(state) {
//     return state.app.list
// }
export default rootReducer