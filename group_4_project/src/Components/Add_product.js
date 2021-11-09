import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { addNweProductToList } from '../reducers/products/actions';




function Edit_product() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const state = useSelector((state) => {
    return { products: state.productsReducer };});


  return (
<div className="div_edit_product">
 <div className="form-group"> 

 <label className="lable_form" htmlFor="Title">Title:</label> 
 <input type="text" className="form-control" id="Title" placeholder="New product"/> 

 </div> <div className="form-group">

  <label className="lable_form" htmlFor="Price">Price:</label> 
  <input type="number" className="form-control" id="Price" placeholder="100$"/>

   </div> <div className="form-group">
    <label className="lable_form" htmlFor="Image">Image:</label>
    <input type="text" className="form-control" id="Image" placeholder="https://i.pravatar.cc"/>

     </div>
      <div className="form-group"> 

      <label className="lable_form" htmlFor="Category">Category:</label>

    <select multiple className="form-control" id="Category"> 
     <option value="mens clothing">Mens clothing</option>
      <option value="womens clothing">Womens clothing</option> 
      <option value="jewelery">Jewelery</option> 
      <option value="electronics">Electronics</option> 
      </select>
      
       </div> 
       <div className="form-group"> 

      <label className="lable_form" htmlFor="Description">Description:</label>
       <textarea className="form-control" id="Description" rows="3"></textarea> 

       </div>
       
        <p className="btn_form"><button type="button" className="btn btn-secondary" onClick={()=>{
          const x = {
            id:state.products.productsLis[state.products.productsLis.length-1].id+1,
            title:title,
            price:price,
            image:image,
            category:"jewelery",
            description:description,
            rating:{rate:3.9,count:120}
          }
            dispatch(addNweProductToList(x))
            navigate("/products");
        }}>Add product</button></p>

</div>
   
  );
}

export default Edit_product;
