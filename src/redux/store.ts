import {combineReducers, legacy_createStore} from "redux";
import counterReducer from "./CounterReducer";

const reducers = combineReducers({
    counter: counterReducer
})

type ReducersType = typeof reducers
export type RootStateType = ReturnType<ReducersType>


export const store = legacy_createStore(reducers)

export default store;