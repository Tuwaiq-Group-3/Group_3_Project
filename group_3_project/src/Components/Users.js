import {useSelector,useDispatch} from 'react-redux';
import {setUsers} from './Users/Action';

const Users = (user) =>{
<<<<<<< HEAD
=======
    console.log("in users file");
>>>>>>> 057436ef01c35381b6bf2e055c36df8bfecb63e9
  const  dipatch=useDispatch();

    const state =useSelector((state)=>{
return {
    users:state.userReducer.users,
}
    })


const action =setUsers(user);
dipatch(action)

return (
    <p>in users page</p>
)
}

export default Users;