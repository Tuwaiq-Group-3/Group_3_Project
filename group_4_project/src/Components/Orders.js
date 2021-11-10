import React , { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'


function Cart() {

    const dispatch = useDispatch();

// ---------------------------------------------------------------------------------------------------
const productState = useSelector((state) => {
  return { products: state.productsReducer };});

  const loginState = useSelector((state) => {
      return  state.loginStateReducer;});


      const cartState = useSelector((state) => {
          return { cartList: state.CartListReducer.cartList.cartList };});

      const ordersState = useSelector((state) => {
        return { ordersList: state.OrdersListReducer.ordersList.ordersList };});




    const getProduct = (id) =>{
      for(let i = 0 ; i < productState.products.productsLis.length ; i++){
        if( id == productState.products.productsLis[i].id){
          return productState.products.productsLis[i]}
      }
    }


    return (
        <div className="div_cart">
            <h1 className="h_cart">Your Orders</h1>
            <hr/>

            <div className="div_container_order">

            {   ordersState == undefined || productState.products.productsLis == undefined? '' : 
                ordersState.ordersList.map((element, index) => {

        if(element.userId == loginState){
          return (<div key={index}> 
          <p className="text-center" ><b>Time: </b>{ordersState.ordersList[index].time} | <b>Order Number: </b>{ordersState.ordersList[index].orderId}</p>          
          {ordersState.ordersList[index].productsList.map((element, index2) => {
            
            let x = getProduct(element);
            return ( 
                      <div className="container div_container"  key={index2}>
                      <div className="row">
                        <div className="col text-white text-center">
                          {x.title}
                        </div>
                        <div className="col text-white text-center">
                        {x.price}$
                        </div>

                      </div>
                    </div> 
          )})
        }</div> )}
        })}


</div> 
</div>

    )
}

export default Cart