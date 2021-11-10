export const setList = (list) => {
  return {
    type: "SET_LIST",
    payload: list,
  };
};

export const editProductList = (product) => {
  return {
    type: "EDIT_FROM_PRODUCT_LIST",
    payload : product
}}

export const delProductList = (product_id) => {
  return {
    type: "DELETE_FROM_PRODUCT_LIST",
    payload: {
      productId:product_id
    }

  };
};

export const addNweProductToList = (product) => {
  return {
    type: "ADD_ITEM_TO_LIST",
    payload: product
      
  };
  
};
export default setList;


