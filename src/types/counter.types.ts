export enum  CounterActyonTypes {
    ADD="ADD",
    SUB="SUB"
}

export interface CounterState{
    points:number
}

export interface CounterAction {
    type: CounterActyonTypes.ADD | CounterActyonTypes.SUB
    payload: number
}