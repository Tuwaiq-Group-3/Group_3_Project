const initialState = -1;



const loginStateReducer = (state = initialState, { type, payload }) => {

  switch (type) {

    case "SET_LOGIN":

      return  payload ;

    default:
      return state;
  }
};

export default loginStateReducer;
