import { useDispatch } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Add, Sub } from "../store/action-creators/counter"

export function Counter(){
const dispatch = useDispatch()
const {points} = useTypedSelector(state=>state.counter)

const addHandler = ()=>{
dispatch(Add())
}

const subHandler = ()=>{
   dispatch(Sub())
}
return(
    <div>
         <button onClick={addHandler}>add</button>
      <button onClick={subHandler}>min</button>
      <div>{points}</div>
    </div>
)

}