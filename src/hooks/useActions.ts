import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionCreators1 from '../store/action-creators/user'
import * as ActionCreators2 from '../store/action-creators/counter'
import  ActionCreators from "../store/action-creators/index"

export const useActions=()=>{
    console.log("!!!dtyt", ActionCreators)
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
