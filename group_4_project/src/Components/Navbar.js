import '../App.css';
import icon from '../Img/icon.png'
import login from '../Img/login.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";





function Navbar() {
  const navigate = useNavigate();
  const loginState = useSelector((state) => {
    return  state.loginStateReducer;});


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

        </ul>
        <div className="d-flex">
        <a className="navbar-brand" onClick={()=>{navigate("/login");}}><img src={login} className="img-fluid"  /></a>

        </div>
      </div>
    </div>
  </nav>

    </div>
  );
}

export default Navbar;
