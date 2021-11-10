import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Products from './Components/Products'
import Details from './Components/Details';
import Wish from './Components/Wish';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Components/Login'
import Signup from './Components/Sign_up'
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import setList from "./reducers/products/actions"
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Edit_product from './Components/Edit_product';
import Add_product from './Components/Add_product'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.all([
      axios.get('https://fakestoreapi.com/products')
    ])
    .then(r => {
      dispatch(setList(r[0].data)); 
      console.log(r[0].data);
       });
  
      }
  
  ,[]);


  return (

    <BrowserRouter>
    <div>

      <Navbar/>

      <Routes>
      
          <Route path="/"  element={<Home />} />
          <Route path="/aboutus"  element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/wishList" element={<Wish />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/edit_product/:id" element={<Edit_product />} />
          <Route path="/add_product" element={<Add_product />} />



      </Routes>

      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
