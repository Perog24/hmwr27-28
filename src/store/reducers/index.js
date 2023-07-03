import {combineReducers} from 'redux'
import { counter } from "./counter.reducer";
import { users } from './users.reducer';



export default combineReducers({counter, users});