import '../App.css';
import icon from '../Img/icon.png'
import login from '../Img/login.png'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { setLoginState } from '../reducers/loginState/actions';






function Navbar() {

  const  dipatch=useDispatch();

  const productState = useSelector((state) => {
    return { products: state.productsReducer };});
  
  const cartState = useSelector((state) => {
    return { cartList: state.CartListReducer.cartList.cartList };});


  const navigate = useNavigate();
  const loginState = useSelector((state) => {
    return  state.loginStateReducer;});

    const userState =useSelector((state)=>{

      return {
          users:state.userReducer.users.users,
      }
          })


    const result =() =>{
      let count = 0;
if(cartState == undefined || productState.products.productsLis == undefined ){return 0;}

cartState.cartList.find(obj => {
  if(obj.userId === loginState){
    count++}

})
return count;
}

const userName =() =>{
  let user = '';

if(userState == undefined ){return '';}

userState.users.find(obj => {
if(obj.id === loginState){
user =  obj.name;}

})
return user;
}

  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand"  onClick={()=>{navigate("/");}}><img src={icon} className="img-fluid" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={()=>{navigate("/");}} >Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={()=>{navigate("/aboutus");}} >About us</a>
        </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={()=>{navigate("/products");}}>Products</a>
          </li>

          <li className="nav-item">
            <a className="nav-link"  onClick={()=>{
              if(loginState === -1 ){
                alert("You must first register or login")
                navigate("/login");}
                else{
              navigate("/wishList");}}}>Wish List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={()=>{
              if(loginState === -1 ){
                alert("You must first register or login")
                navigate("/login");}
                else{
              navigate("/cart");}}} >Cart</a>

          </li> 

          <li className="nav-item">
          <i className="fa" >&#xf07a;</i>
<span className='badge badge-warning' id='lblCartCount'> {result()} </span> 
         </li> 

        </ul>
        <div className="d-flex">
        <a className="navbar-brand" onClick={()=>{navigate("/login");}}>{loginState === -1? '':'@'+userName()+"  "}<img src={login} className="img-fluid"  onClick={()=>{
          const action = setLoginState(-1);  
        dipatch(action);
        navigate("/login");}}/></a>
{/*         const action = setLoginState(e.id);  
        dipatch(action)  */}
        </div>
      </div>
    </div>
  </nav>

    </div>
  );
}

export default Navbar;
