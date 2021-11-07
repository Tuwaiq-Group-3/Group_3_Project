export const setUsers = (users) => {
    // users: is an array of user objects
  //console.log("inaction: "+ users.name);
    return {
      type: "SET_USERS",
      payload: users,
    };
  };


  export const setId = (id) => {
    
    return {
      type: "SET_ID",
      payload: id,
    };
  };
  