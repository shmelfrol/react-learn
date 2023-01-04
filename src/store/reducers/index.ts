import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
{ 
    user: userReducer,
    counter: counterReducer,
    todo: todoReducer
}
)

export type RootState=ReturnType<typeof rootReducer>