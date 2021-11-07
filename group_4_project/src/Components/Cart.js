import React , { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCartList,delItem} from '../reducers/cart/actions'
import axios from 'axios'
import Element from './Element';
import setList from "../reducers/products/actions"

function Cart() {

    const dispatch = useDispatch()


    const collectionDelivery = {
        'Aramex': 23,
        'UPS': 8,
        'DHL': 5,
        'SMSA': 12, 
   }
   
    
    const collectionDeliveryOptions = {
         'Premium': 12,
         'Medium': 8,
         'Basic': 5
    }




    const [couponDiscount,setCouponDiscount] = useState()
    const [total,setTotal] = useState()



    const coupons = {
        one:0.05,
        tow:0.1,
        three:0.15
    }

    function checkCoupon(){
        if(coupons.couponDiscount){
            document.getElementById("emailHelp").innerHTML = "Discounted"
            document.getElementById("emailHelp").style.color = "green";

        }else{
            document.getElementById("emailHelp").innerHTML = "Wrong coupon !"
            document.getElementById("emailHelp").style.color = "red";
        }
    }

// ---------------------------------------------------------------------------------------------------
useEffect(() => {
    axios.all([
      axios.get('https://fakestoreapi.com/products')
    ])
    .then(r => {
      dispatch(setList(r[0].data)); 
  
       });
  
      }
  
  ,[]);

  const productState = useSelector((state) => {
    return { products: state.productsReducer };});

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


const getTotal =()=>{
    if(cartState == undefined || productState.products.productsLis == undefined ){return 0;}
    let count = 0;
    for(let i = 0 ; i< cartState.cartList.length ; i++){
        if(cartState.cartList[i].userId == 0){
            let x = getProduct(cartState.cartList[i].productId);
            count += x.price;
        }

    }
    return count
}

    return (
        <div>
            <h1>Your Cart</h1>
            <hr/>
            {/* ---------------items------ */}
            {   cartState == undefined || productState.products.productsLis == undefined? '' : 
            cartState.cartList.map((element, index) => {
        if(element.userId == 0){
            let x = getProduct(element.productId);
          return ( <div className="container" key={index}>
  <div className="row">
    <div className="col">
      {x.title}
    </div>
    <div className="col">
    {x.price}
    </div>
    <div className="col">
      Column
    </div>
  </div>
</div> )
        }
        })}



            {/* ---------------items------ */}

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Coupon:</label>
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Coupon" onChange={(e)=>{
        setCouponDiscount(e.target.value)
    }} />
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
  <button type="button" className="btn btn-primary" onClick={checkCoupon}>Check</button>


  <select className="form-control">
  <option>Default select</option>
</select>

<h6 id="total">{Math.floor(getTotal())}</h6>
<h6 id="VAT_total">{Math.floor((getTotal() * 0.15)+ getTotal())}</h6>

        </div>
    )
}

export default Cart