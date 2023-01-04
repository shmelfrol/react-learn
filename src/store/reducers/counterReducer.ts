import { CounterAction, CounterActyonTypes, CounterState } from "../../types/counter.types"



const initialState: CounterState={
    points:0
}

export const counterReducer =(state=initialState, action:CounterAction):CounterState=>{
switch(action.type){
    case CounterActyonTypes.ADD:{
     return {points: state.points+1}
    }
    case CounterActyonTypes.SUB: {
        return {points: state.points-1}
    }
    default: return state
}

}