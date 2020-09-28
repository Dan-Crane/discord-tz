import {combineReducers, createStore} from "redux";

let reducer = combineReducers({
	server: serverReducer
})

export const store = createStore(reducer)
