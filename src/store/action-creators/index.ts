import * as UserActionCreators from "./user"
import * as CounterActionCreators from "./counter"
import * as TodoActionCreators from "./todo"
export default {
    ...UserActionCreators,
    ...CounterActionCreators, 
    ...TodoActionCreators
}