import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo.types"




export const fetchTodos = (page=1, limit=10)=>{
    return async (dispatch: Dispatch<TodoAction>) =>{
try{
dispatch({type:TodoActionTypes.FETCH_TODO})
const res = await axios.get("https://jsonplaceholder.typicode.com/todos", {
    params:{_page:page, _limit: limit}
})
setTimeout(()=>{
    dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: res.data})
}, 1000)


}catch(e){
    dispatch({
        type: TodoActionTypes.FETCH_TODO_ERROR, 
        payload: "error todo"
    })
}
    }
}

export const setTodoPage=(page:number):TodoAction=>{
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}