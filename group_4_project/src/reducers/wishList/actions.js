export const addWishList = (product_id, user_id) => {
  return {
    type: "ADD_TO_LIST",
    payload: {
      userId:user_id,
      productId:product_id},
      
  };
  
};

export const delWishList = (product_id, user_id ) => {
  return {
    type: "DELETE_FROM_LIST",
    payload: {
     
      userId:user_id,
      productId:product_id
    }

  };
};


