import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchUsers } from "../store/action-creators/user"

const UserList:React.FC = () =>  {
    //const state = useTypedSelector(state=>state.user)
    const {users, error, loading} = useTypedSelector(state=>state.user)
  // console.log(state)
    const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(fetchUsers())
  }, [])


    return (
        <div>

        </div>
    )
}

export default UserList