export const setProduct = (list) => {
  console.log('setting product',list)
  return {
    type: "SET_PORDUCT",
    payload: list,
  };
};


