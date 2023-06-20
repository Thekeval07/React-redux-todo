import { createStore, combineReducers } from "redux";
import todoReducer from './Reducer/Todo-reducer'
const rootReducer = combineReducers ({todos:todoReducer, })

const store = createStore(rootReducer)
 export default store