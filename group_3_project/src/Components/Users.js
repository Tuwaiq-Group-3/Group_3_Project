import {useSelector,useDispatch} from 'react-redux';
import {setUsers} from './Users/Action';

const Users = (user) =>{
    dipatch=useDispatch();

    const state =useSelector((state)=>{
return {
    users:state.userReducer.users,
}
    })
}

const action =setUsers(user);
dipatch(action)

return (
    <p>in users page</p>
)
export default Users;