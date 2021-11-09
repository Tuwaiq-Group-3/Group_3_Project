const initialState = {
  wishList: {wishList: [

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



const wishListReducer = (state = initialState, { type, payload }) => {

  switch (type) {



    case "ADD_TO_WISH_LIST":
      for(let i = 0 ; i < state.wishList.wishList.length ; i++){
        if(state.wishList.wishList[i].productId == payload.productId && state.wishList.wishList[i].userId == payload.userId){
          return {wishList: {wishList:[ ...state.wishList.wishList]} };
        }
      }
      return {wishList: {wishList:[ ...state.wishList.wishList, payload]} };





      case "DELETE_FROM_WISH_LIST":

        let x = state.wishList.wishList;

        let index = -1;
        for(let i = 0 ; i < state.wishList.wishList.length ; i++){
          

          if(state.wishList.wishList[i].userId === payload.userId &&  state.wishList.wishList[i].productId === payload.productId){
            index = i; 
               break;
          }
        }

        x.splice(index, 1);

        return {wishList:{ wishList: x }}




    default:
      return state;
  }
};

export default wishListReducer;
