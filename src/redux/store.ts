import poshtaReducer from "./reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, Action } from "redux";

export type AppStateType = ReturnType<rootReducerType>
type PropertyTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertyTypes<T>>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
const rootReducer = combineReducers({
	novaposhta: poshtaReducer
})
type rootReducerType = typeof rootReducer;
const store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)));

export default store