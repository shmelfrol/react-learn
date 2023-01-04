
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"


export function Counter(){
const {points} = useTypedSelector(state=>state.counter)
const {Add, Sub} = useActions()
const addHandler = ()=>{
    Add()
}

const subHandler = ()=>{
   Sub()
}
return(
    <div>
         <button onClick={addHandler}>add</button>
      <button onClick={subHandler}>min</button>
      <div>{points}</div>
    </div>
)

}