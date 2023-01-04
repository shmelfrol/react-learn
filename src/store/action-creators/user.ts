import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user.types"



export const fetchUsers = ()=>{
    return async (dispatch: Dispatch<UserAction>) =>{
try{
dispatch({type:UserActionTypes.FETCH_USERS})
const res = await axios.get("https://jsonplaceholder.typicode.com/users")
dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS, payload: res.data})
}catch(e){
    dispatch({
        type:UserActionTypes.FETCH_USERS_ERROR, 
        payload: "error fetching users"
    })
}
    }
}