import '../App.css';
import { useState } from "react";
import Element from './Element';

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


function Products() {

  const navigate = useNavigate();


  const [filter, setFilter] = useState({filter:{
    Rating: 0,
    type:'All',
    Max:Number.MAX_VALUE,
    Min:0
  }});

  const [max, setMax] = useState(1);
  const [min, setMin] = useState(1);
  const [showMore, setShowmore] = useState(4);
  let i = 0;



  const state = useSelector((state) => {
    return { products: state.productsReducer };});
    const loginState = useSelector((state) => {
      return  state.loginStateReducer;});


      let inputVal
      const [inputValue,setValue]=useState();
      
      
         const onChange=(e)=>{
          inputVal=(e.target.value).toLowerCase()
          console.log(inputVal);
          setValue(inputVal);
        }
      
       

        console.log(inputValue);

  return (
    

    state.products.productsLis == undefined ? '' :
    <div className="d9">
<div className='search-bar'>
    <input className="input1" type="text" onChange={onChange}  placeholder="Search.."/> 
  
    </div>
<div id="div_filter">
{/* ----------------------------------------------------------------- */}

<label htmlFor="customRange3" className="form-label filter_rating">Rating {filter.filter.Rating}/5</label>
<input type="range"  min="0" max="5" step="0.5" id="customRange3" onChange={(e)=>{
  let x = {
    Rating: e.target.value,
    type:filter.filter.type,
    Max:filter.filter.Max,
    Min:filter.filter.Min
  }
  setFilter({filter:x});
}}/>
<hr className="filter_hr"/>
{/* ----------------------------------------------------------------- */}
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:'All',
    Max:filter.filter.Max,
    Min:filter.filter.Min
  }
  setFilter({filter:x});
}}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2">
  All
  </label>
</div>

<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:"men's clothing",
    Max:filter.filter.Max,
    Min:filter.filter.Min
  }
  setFilter({filter:x});
}}  />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
  Men's clothing
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:"women's clothing",
    Max:filter.filter.Max,
    Min:filter.filter.Min
  }
  setFilter({filter:x});
}} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Women's clothing
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:"jewelery",
    Max:filter.filter.Max,
    Min:filter.filter.Min
  }
  setFilter({filter:x});
}} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Jewelery
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:"electronics",
    Max:filter.filter.Max,
    Min:filter.filter.Min
  }
  setFilter({filter:x});
}}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  Electronics
  </label>
</div>
<hr className="filter_hr"/>

{/* ----------------------------------------------------------------- */}
<button type="button" className="filter_price_button"  onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:filter.filter.type,
    Max:25,
    Min:0
  }
  setFilter({filter:x});
}}>Under 25$</button><br/>
<button type="button" className="filter_price_button" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:filter.filter.type,
    Max:50,
    Min:25
  }
  setFilter({filter:x});
}} >25$ To 50$</button><br/>
<button type="button" className="filter_price_button" onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:filter.filter.type,
    Max:100,
    Min:50
  }
  setFilter({filter:x});
}} >50 To 100</button><br/>
<button type="button" className="filter_price_button"  onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:filter.filter.type,
    Max:200,
    Min:100
  }
  setFilter({filter:x});
}}>100 To 200$</button><br/>
<button type="button" className="filter_price_button"  onClick={()=>{
  let x = {
    Rating: filter.filter.Rating,
    type:filter.filter.type,
    Max:Number.MAX_VALUE,
    Min:200
  }
  setFilter({filter:x});
}}>200$ Above</button><br/>

<div className="form-group">
    <input type="number" className="form-control"  placeholder="Min" min="1" onChange={(e)=>{
      if(e.target.value >= 1 ){setMin(e.target.value)}
      else{setMin(1);}}}/>
    <input type="number" className="form-control"  placeholder="Max" min="1" onChange={(e)=>{
      if(e.target.value >= 1 ){setMax(e.target.value)}
      else{setMax(1);}}}/>
    <button type="button" className="btn btn-outline-primary mb-2" id="button_filter" onClick={()=>{
    let x = {
    Rating: filter.filter.Rating,
    type:filter.filter.type,
    Max:max,
    Min:min
  }
  setFilter({filter:x});


    }}>Go</button>
</div> 


{/* ----------------------------------------------------------------- */}
</div>


        <div className="c">
            <div className="card-group2 products_card">




  {     state.products.productsLis == undefined ? '' : 
      state.products.productsLis.map((element, index) => {
        if(element.title.toLowerCase().includes(inputValue)&&(inputValue.toLowerCase())){
          console.log("in if");
          return <Element props={element}  key={index} />}
       if(i < showMore && filter.filter.Rating <= element.rating.rate &&( filter.filter.type == element.category || filter.filter.type == 'All') && filter.filter.Max >= element.price && filter.filter.Min <= element.price &&!inputValue){
        i++;
        return <Element props={element}  key={index} />}
        
         
        })}
      
        {            loginState !== 0 ? '' : 
<div>

    
<div className="card card_e">
          <div className="card-body position-relative">
            <h6 className="card-title title">Add new Product</h6>
          <div className="card-footer bo0" id="text1">
            <small className="text-muted" >

            <button type="button" className="btn btn-outline-secondary btn-sm card_btn" onClick={()=>{navigate("/add_product");}}>Add</button>
            </small>
          </div>
        </div>
  
    </div></div>}
            </div>
        </div>


<div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example ">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" onClick={()=>{
      setShowmore(showMore + 4);
    }}>Show more</a></li>
  </ul>
</nav>
</div>

    </div>
    
  );


}

export default Products;
