import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Products from './Components/Products'
import Details from './Components/Details';
import Wish from './Components/Wish';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login'
import Sign_up from './Components/Sign_up'
import Cart from './Components/Cart';
function App() {
  return (

    <BrowserRouter>
    <div>

      <Navbar/>

      <Routes>
      
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/wishList" element={<Wish />} />
          <Route path="/cart" element={<Cart />} />


      </Routes>

      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
