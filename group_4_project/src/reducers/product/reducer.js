const initialState = {
  product: {}
}

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_PORDUCT":
      console.log('setting product ===> ',payload)
      return payload;
    

    default:
      return state;
  }
};

export default productReducer;
