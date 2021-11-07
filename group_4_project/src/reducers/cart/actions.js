export const addCartList = (product_id, user_id) => {
  return {
    type: "ADD_TO_LIST",
    payload: {
      userId:user_id,
      productId:product_id},
      
  };
  
};

export const delItem = (product_id, user_id ) => {
  return {
    type: "DELETE_FROM_LIST",
    payload: {
     
      userId:user_id,
      productId:product_id
    }

  };
};


