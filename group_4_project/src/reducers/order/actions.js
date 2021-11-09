export const addOrderstList = (products_list, user_id) => {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = "("+date+' : '+time+")";

  return {
      type: "ADD_TO_ORDERS_LIST",
      payload: {

      userId:user_id,
      productsList:products_list,
      time:dateTime,
      orderId:"("+makeid(6)+")"

    },
      
  };
  
};

function makeid(length) {
  var result           = '';
  var characters       = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}




