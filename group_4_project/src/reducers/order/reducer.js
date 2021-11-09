const initialState = {
  ordersList: {ordersList: [

{
  userId:0,
  productsList:[1,5,7],
  time:'01/01/2021 | 12:12:12',
  orderId:"32ddewdf"
},


  ]
 }
}



const OrdersListReducer = (state = initialState, { type, payload }) => {
  switch (type) {



    case "ADD_TO_ORDERS_LIST":
      
      return {ordersList: {ordersList:[ ...state.ordersList.ordersList, payload]} };


    default:
      return state;
  }
};

export default OrdersListReducer;
