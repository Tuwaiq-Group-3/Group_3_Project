import '../App.css';
import Element from './Element';
import { useDispatch, useSelector } from "react-redux";


function Wish() {

  const dispatch = useDispatch();

  const wishState = useSelector((state) => {
    return { wishList: state.wishListReducer.wishList.wishList };});

const productState = useSelector((state) => {
        return { products: state.productsReducer };});

        const loginState = useSelector((state) => {
          return  state.loginStateReducer;});


const getProduct = (id) =>{
  for(let i = 0 ; i < productState.products.productsLis.length ; i++){
    if( id == productState.products.productsLis[i].id){
      return productState.products.productsLis[i]}
  }
}

 const result =() =>
   wishState.wishList.find(obj => {
  return obj.userId === loginState
})

  return (<>

{wishState == undefined || productState.products.productsLis == undefined? '' :

result() == undefined ?  <h1 className="h_wish">Your Wish List is empty</h1> :
        <div className="wish_div">
            <div className="card-group2 wish_card">

  {   wishState.wishList.map((element, index) => {
        if(element.userId == loginState){
          return <Element props={getProduct(element.productId)}  key={index} /> 
        }
        })}

            </div>
        </div>

        }
</>
  );



}

export default Wish;
