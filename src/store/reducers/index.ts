import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
{ 
    user: userReducer,
    counter: counterReducer
}
)

export type RootState=ReturnType<typeof rootReducer>