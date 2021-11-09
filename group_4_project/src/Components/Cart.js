import React , { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCartList,delItem} from '../reducers/cart/actions'
import { addOrderstList } from '../reducers/order/actions'
import { useNavigate } from 'react-router-dom';



function Cart() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


// ---------------------------------------------------------------------------------------------------
const productState = useSelector((state) => {
  return { products: state.productsReducer };});

  const ordersState = useSelector((state) => {
    return { ordersList: state.OrdersListReducer.ordersList.ordersList };});


  const loginState = useSelector((state) => {
      return  state.loginStateReducer;});


      const cartState = useSelector((state) => {
          return { cartList: state.CartListReducer.cartList.cartList };});

          const getProduct = (id) =>{
              for(let i = 0 ; i < productState.products.productsLis.length ; i++){
                if( id == productState.products.productsLis[i].id){
                  return productState.products.productsLis[i]}
              }
            }


let total = 0;
const getTotal =()=>{
  if(cartState == undefined || productState.products.productsLis == undefined ){ total = 0;return total;}
  
  for(let i = 0 ; i< cartState.cartList.length ; i++){
      if(cartState.cartList[i].userId == 0){
          let x = getProduct(cartState.cartList[i].productId);
          total += x.price;
      }
      if(couponDiscount !== 0){total = (total*couponDiscount)+total
      }
      if(deliveryOptions !== 0){total = deliveryOptions + total}

  }
  return total
}

    
    const [couponDiscount,setCouponDiscount] = useState(0)
    const [textDiscount,setTextDiscount] = useState('')
    
    const [deliveryOptions,setDeliveryOptions] = useState(0)





   const  getCoupons=(e)=>{
    const coupons = {
      one:0.05,
      tow:0.1,
      three:0.15
  }
  if(coupons[textDiscount] !== undefined){
    setCouponDiscount(coupons[textDiscount]);
    document.getElementById("textCoupons").innerHTML = "Discounted"
    document.getElementById("textCoupons").style.color = "green";
  }else{
    document.getElementById("textCoupons").innerHTML = "Wrong coupon !"
    document.getElementById("textCoupons").style.color = "red";
  }
   } 






const  getdeliveryOptions=(e)=>{

  const collectionDelivery = {
    a: 0,
    Delivery: 23,
    Collection: 8,

}

if(collectionDelivery[e] !== undefined){
  setDeliveryOptions(collectionDelivery[e]);
}
 } 

 let arr_products = [];

    return (
        <div className="div_cart">
            <h1 className="h_cart">Your Cart</h1>
            <hr/>
            {/* ---------------items------ */}
            {   cartState == undefined || productState.products.productsLis == undefined? '' : 
            cartState.cartList.map((element, index) => {
        if(element.userId == loginState){
            let x = getProduct(element.productId);
            arr_products.push(element.productId);
          return ( <div className="container div_container"  key={index}>
  <div className="row">
    <div className="col text-white text-center">
      {x.title}
    </div>
    <div className="col text-white text-center">
    {x.price}$
    </div>
    <div className="col text-white text-center">
    <button type="button" className="btn btn-primary btn-sm add_del_cart" onClick={()=>{
        dispatch(addCartList(x.id,loginState));

    }}>Add More</button> <button type="button" className="btn btn-danger btn-sm add_del_cart" onClick={()=>{
        dispatch(delItem(x.id,loginState));

    }}>Delete</button>

    </div>
  </div>
</div> )
        }
        })}



            {/* ---------------items------ */}

  <div className="form-group">
    <p className="p_Delivery">Coupon:</p>
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Coupon" onChange={(e)=>{
        setTextDiscount(e.target.value)
    }} />
    <small id="emailHelp" className="form-text text-muted"><p id="textCoupons"></p></small>
  </div>
  <button type="button" className="btn btn-outline-secondary" onClick={getCoupons} >Check</button>


  <p className="p_Delivery">Delivery Options:</p>
  <select id="a" className="form-control" onChange={(e)=>{
    getdeliveryOptions(e.target.value)
  }}>
  <option value="a">Select Delivery Options</option>
  <option value="Delivery">Delivery</option>
  <option value="Collection">Collection</option>
</select>

<h6 id="total">Total:{Math.floor(getTotal(total))}</h6>
<h6 id="VAT_total">Total with VAT:{Math.floor((total * 0.15)+total)}</h6>
<h6 id="total"><button type="button" className="btn btn-outline-success" id="cart_btn" onClick={()=>{
  dispatch(addOrderstList(arr_products,loginState))

  navigate("/orders");
  alert("Order successful");
}}>Checkout </button></h6>


        </div>
    )
}

export default Cart