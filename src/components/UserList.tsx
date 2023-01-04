import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { fetchUsers } from "../store/action-creators/user"

const UserList:React.FC = () =>  {
    //const state = useTypedSelector(state=>state.user)
    const {users, error, loading} = useTypedSelector(state=>state.user)
  // console.log(state)
   // const dispatch = useDispatch()
   const {fetchUsers} = useActions()
  useEffect(()=>{
    //@ts-ignore
  fetchUsers() 
  }, [])

if(loading){
  return (<h1>Loading</h1>)
}

if (error){
  return (<h1>{error}</h1>)
}


    return (
        <div>
{users.map(user=><div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default UserList