import { useEffect } from "react"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"


export const TodoList: React.FC=()=>{
    const {page, error, loading, todos, limit}= useTypedSelector(state=> state.todo)
    const {fetchTodos, setTodoPage}= useActions()
    const pages=[1,2,3,4,5]
    useEffect(()=>{
        fetchTodos(page, limit)
    }, [page])

    if(loading){
        return (<h1>Loading</h1>)
      }
      
      if (error){
        return (<h1>{error}</h1>)
      }

return (
<div>
{todos.map(todo=>
<div key={todo.id}> {todo.title}</div>)}

<div style={{display:"flex"}}>
{pages.map(p=><div 
onClick={()=>{setTodoPage(p)}}
style={{padding:2, border:"solid 1px", margin:1, background: p===page? "red":"white"}}>{p}</div>)}
</div>

kl
</div>


)



}