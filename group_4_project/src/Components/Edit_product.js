import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import {useParams, useNavigate} from "react-router-dom";
import { useState } from "react";
import { editProductList } from '../reducers/products/actions';




function Edit_product(props) {

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return { products: state.productsReducer };});

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');


    const navigate = useNavigate();
    let { id } = useParams();

  return (
<>
{  state.products.productsLis == undefined ? '' : 
    state.products.productsLis.map((element, index) => {
      if(element.id ==id){return (

        <div className="div_edit_product" key={index}>
 <div className="form-group"> 

 <label className="lable_form" htmlFor="Title">Title:</label> 
 <input type="text" className="form-control" id="Title" placeholder={element.title} onChange={(e)=>{setTitle(e.target.value)}}/> 

 </div> <div className="form-group">

  <label className="lable_form" htmlFor="Price">Price:</label> 
  <input type="number" className="form-control" id="Price" placeholder={element.price} onChange={(e)=>{setPrice(e.target.value)}}/>

   </div> <div className="form-group">
    <label className="lable_form" htmlFor="Image">Image:</label>
    <input type="text" className="form-control" id="Image" placeholder={element.image} onChange={(e)=>{setImage(e.target.value)}}/>

     </div>

       <div className="form-group"> 

      <label className="lable_form" htmlFor="Description">Description:</label>
       <textarea className="form-control" id="Description" rows="3" placeholder={element.description} onChange={(e)=>{setDescription(e.target.value)}}></textarea> 

       </div>
       
        <p className="btn_form"><button type="button" className="btn btn-secondary" onClick={()=>{          
          const x = {
            id:element.id,
            title:title,
            price:price,
            image:image,
            category:element.category,
            description:description,
            rating:element.rating
          }
            dispatch(editProductList(x))
            navigate("/products");
        }}>Edit product</button></p>

</div>

        
    )}})}

   </>
  );
}

export default Edit_product;
