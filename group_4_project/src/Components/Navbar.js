import '../App.css';
import icon from '../Img/icon.png'
import login from '../Img/login.png'



function Navbar() {


  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand"  href="#"><img src={icon} className="img-fluid" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" >Home</a>
        </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/products">Products</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Wish List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" >Cart</a>
          </li>         
        </ul>
        <div className="d-flex">
        <a className="navbar-brand" href="#" ><img src={login} className="img-fluid" /></a>

        </div>
      </div>
    </div>
  </nav>

    </div>
  );
}

export default Navbar;
