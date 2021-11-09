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

  
  return (

        <div className="wish_div">
            <div className="card-group2 wish_card">

  {   wishState == undefined || productState.products.productsLis == undefined? '' : 
      wishState.wishList.map((element, index) => {
        if(element.userId == loginState){
          return <Element props={getProduct(element.productId)}  key={index} /> 
        }
        })}

            </div>
        </div>

  );



}

export default Wish;
