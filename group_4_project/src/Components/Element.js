import '../App.css';
import Wish_List1 from "../Img/Wish_List1.png"
import Wish_List2 from "../Img/Wish_List2.png"
import { useNavigate, useLocation  } from 'react-router-dom';
import {addWishList} from '../reducers/wishList/actions'
import {delWishList} from '../reducers/wishList/actions'
import { addCartList} from '../reducers/cart/actions'
import {delProductList} from '../reducers/products/actions'
import { useDispatch, useSelector } from "react-redux";
import { editProductList } from '../reducers/products/actions';


function Element(props) {
  const location = useLocation();
  const wishState = useSelector((state) => {
    return { wishList: state.wishListReducer.wishList.wishList };});

    const loginState = useSelector((state) => {
      return  state.loginStateReducer;});


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const find=(product_id, user_id)=>{
     
     for(let i = 0 ; i < wishState.wishList.length ; i++){
       if(user_id ==  wishState.wishList[i].userId && product_id ==  wishState.wishList[i].productId){
         return 1;
       }
     }
     return 0;
  }



  return (
    <div>

    
<div className="card card_e">
          <img className="card-img-top" src={props.props.image} alt="Card image cap card_e" height="1%"/>
          <div className="card-body position-relative">
            <h6 className="card-title title">{props.props.title}</h6>
            <p className="position-absolute bottom-0 end-0 card_price">{props.props.price}$</p>
{find(props.props.id , loginState) == 0 ? <img className="position-absolute bottom-0 start-0 card_img" id={props.props.id} src={Wish_List1} alt="Wish list" onClick={()=>{
  if(document.getElementById(props.props.id).src == Wish_List1){
  document.getElementById(props.props.id).src= Wish_List2;
  dispatch(addWishList(props.props.id,loginState));
  }else{
  document.getElementById(props.props.id).src=Wish_List1;
  dispatch(delWishList(props.props.id,loginState));
  }

}} />: 
<img className="position-absolute bottom-0 start-0 card_img" id={props.props.id} src={Wish_List2} alt="Wish list" onClick={()=>{
  if(document.getElementById(props.props.id).src == Wish_List1){
  document.getElementById(props.props.id).src= Wish_List2;

  dispatch( addWishList(props.props.id,loginState) );
  }
  else{
  document.getElementById(props.props.id).src=Wish_List1;
  dispatch(delWishList(props.props.id,loginState));
  }

}} />
 }
          </div>
          <div className="card-footer bo0" id="text1">
            <small className="text-muted" >

            <button type="button" className="btn btn-outline-secondary btn-sm card_btn" onClick={()=>{
            navigate("/Details/"+props.props.id);
            }}>Details</button>
            <button type="button" className="btn btn-outline-success btn-sm card_btn"  onClick={()=>{
        dispatch(addCartList(props.props.id,loginState));

    }}>Add to cart</button>

{loginState !== 0 || location.pathname === '/wishList' ? '' : <>
<button type="button" className="btn btn-outline-primary btn-sm card_btn"  onClick={()=>{
          navigate("/edit_product/"+props.props.id);

    }}>Edit Product</button>
    <button type="button" className="btn btn-outline-danger btn-sm card_btn"  onClick={()=>{
        dispatch(delProductList(props.props.id));

    }}>Delete product</button>
    </>}


            </small>
          </div>
        </div>
  
    </div>
  );
}

export default Element;
