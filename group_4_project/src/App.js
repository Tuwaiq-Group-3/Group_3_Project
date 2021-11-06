import './App.css';
import Navbar from './Components/Navbar'
import Users from './Components/Users'
import Footer from './Components/Footer';
import Products from './Components/Products'
import Details from './Components/Details';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
    <div>

      <Navbar/>

      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<Details />} />
      </Routes>

      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
