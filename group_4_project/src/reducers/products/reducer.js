const initialState = {
  products: {productsLis: [] }
}

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_LIST":
      return {
        productsLis: payload
      };



      case "DELETE_FROM_PRODUCT_LIST":
        let x = state.productsLis;
        let index = -1;
        for(let i = 0 ; i < state.productsLis.length ; i++){
          

          if(state.productsLis[i].id === payload.productId){
            index = i; 
               break;
          }
        }

        x.splice(index, 1);
        return { productsLis: x }


    case "EDIT_FROM_PRODUCT_LIST":
        let y = state.productsLis;
        let index2 = -1;
        for(let i = 0 ; i < state.productsLis.length ; i++){
          

          if(state.productsLis[i].id === payload.id){
            index2 = i; 
               break;
          }
        }

        y[index2] = payload
        console.log(y)
        return { productsLis: y }




    case "ADD_ITEM_TO_LIST":
      console.log(state.productsLis)
      return { productsLis:[ ...state.productsLis, payload] };

    default:
      return state;
  }
};

export default productsReducer;
