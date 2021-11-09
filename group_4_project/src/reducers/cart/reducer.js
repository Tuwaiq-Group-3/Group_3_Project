const initialState = {
  cartList: {cartList: [

{
  userId:0,
  productId:1
},
{
  userId:0,
  productId:2
},
{
  userId:0,
  productId:3
},
{
  userId:0,
  productId:4
},

  ]
 }
}



const CartListReducer = (state = initialState, { type, payload }) => {

  switch (type) {



    case "ADD_TO_LIST":
      return {cartList: {cartList:[ ...state.cartList.cartList, payload]} };





      case "DELETE_FROM_LIST":

        let x = state.cartList.cartList;

        let index = -1;
        for(let i = 0 ; i < state.cartList.cartList.length ; i++){
          

          if(state.cartList.cartList[i].userId === payload.userId &&  state.cartList.cartList[i].productId === payload.productId){
            index = i; 
               break;
          }
        }

        x.splice(index, 1);

        return {cartList:{ cartList: x }}




    default:
      return state;
  }
};

export default CartListReducer;
