import { CounterActyonTypes } from "../../types/counter.types"

export const Add =()=>{
    return{
        type: CounterActyonTypes.ADD
    }
}

export const Sub =()=>{
    return{
        type: CounterActyonTypes.SUB
    }
}