const initialState= {
    users:{users:[
        {
        id:100,
        name: "user1",
        password: "1",
        }
    ],
    }
}

const userReducer= (state=initialState , {type,payload})=>{



    switch (type) {
        case "SET_USERS":

            let l=((state.users.users.length-1))
            console.log(state.users.users);
              let
                user = {
                   id:parseInt(state.users.users[l].id)+1,
                   name:payload.name,
                   password: payload.password,
               }

            return { users:{
                users:[...state.users.users,user]}
            }

            case "SET_ID":
                return{ 
                    id:payload,
                }
    
        default:
            return state;
    }
    
}


export default userReducer;