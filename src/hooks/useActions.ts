import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionCreators1 from '../store/action-creators/user'
import * as ActionCreators2 from '../store/action-creators/counter'


export const useActions=()=>{
    console.log("!!!dtyt", ActionCreators1)
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators1, dispatch)
}
