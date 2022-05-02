import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter, { counterSaga } from './basic/counter'
import register, { registerSaga } from './auth/register'
import login, { loginSaga } from './auth/login'
import {history} from "./history";
import {connectRouter} from "connected-react-router"
const rootReducer = combineReducers({
    counter,
    register,
    login,
    router: connectRouter(history)
})
export function* rootSaga(){
    yield all([ counterSaga(), registerSaga(), loginSaga()])
}
export default rootReducer