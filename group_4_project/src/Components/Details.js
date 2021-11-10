import React , { useEffect, useState } from 'react'
import '../App.css';
import { useSelector, useDispatch} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {setProduct, setReview} from "../reducers/product/actions";
import setList from "../reducers/products/actions"
import Star from './Star';
import Comment from './Comment'

function Details(props) {
  

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const product = useSelector(state => state.productReducer)
  const listProducts = useSelector(state => state.productsReducer.productsLis)
  const [stars, setStars] = useState([])
  const [voteStars, setvoteStars] = useState(3)
  const [input, setInput] = useState('')
  let { id } = useParams();
  const state = useSelector((state) => {
    return { products: state.productsReducer };});

  function vote(number){
    setvoteStars(number+1)
  }

  function addComment(){

     var total = product?.rating?.count + 1

     var newRate = ( product?.rating?.rate * total + voteStars) / total

     var startList =[]
     var startComments = []
     var list = listProducts
     var array = []

     for (let index = 0; index < voteStars; index++) {
      array.push(true)
    }
      for (let index = 0; index < 5-voteStars; index++) {
        array.push(false)
      }
     if(product?.comment) startComments = [...product?.comment]

     list.map( (e,index) => {
       if(e.id === product.id){
          startList.push({
              ...product,
              rating:{
                rate:newRate,
                count:total
              },
              comment:[...startComments,{comment:input,rate:array}]
          })
      } else {
        startList.push(e)
      }
     })
     dispatch(setProduct({
      ...product,
      rating:{
        rate:newRate,
        count:total
      },
      comment:[...startComments,{comment:input,rate:array}]

    }))
     dispatch(setList(startList))
    
      
  }

  useEffect(() => {
      if(!product) navigate('/')
      var rate =  Math.floor(product?.rating?.rate)
      var array = []
      for (let index = 0; index < rate; index++) {
        array.push(true)
      }
      for (let index = 0; index < 5-rate; index++) {
        array.push(false)
      }
      setStars(array)
  },[listProducts])  


  return (
    <div className="Details position-relative " style={{minHeight: '150vh'}}>

<div className="card text-center position-absolute top-50 start-50 translate-middle card_d">
      <div className="card-header">
        <h5>Description</h5>
      </div>
      
      <div className="card-body">
        <div className="w-100 mx-auto d-flex  " >
          <img className="mx-auto  " src={product?.image} style={{width:'40%'}} alt="" />
          <div className='d-flex flex-column justify-content-center p-3 ' style={{flex: 1}}>
          <p className='card_price p-1'  >${product?.price}</p>
          <div className='d-flex w-100% justify-content-between'>
            {stars.map(
              (e, index) => <Star key={index} bool={e} />
            )}
            <p className='card_price '>({product?.rating?.count} customer review)</p>
          </div>
          <p className="mt-4 p-1" style={{textAlign: 'left'}}>{product?.description}</p>        

        </div>
        </div>
       
      </div>
      <div className=' card_comments pt-4 pb-4' style={{borderTop:'1px solid gray'}}>
        { product?.comment ? product?.comment.map( (e,index) => <Comment comment={e} key={index}></Comment>)
                           : <h5>No reviews to show</h5> 
        }
      </div>
      <div className='card_comment pb-4'>
        <h4 className='card_price d-flex p-4' >Add a review</h4>
        <div className='mb-4 d-flex p-4 card_price'>
          <h5 className='card_price'>review*</h5>
        {
          [0,0,0,0,0].map( (e,index) => <Star index={index} key={index} bool = { index < voteStars ? true : false}  vote={vote} />)
        }
        </div>
        <div className='mb-4 d-flex p-4 card_price'>
          <h5 className='card_price'>comment</h5>
          <textarea  placeholder='What do you think of this product' value={input} onChange={(e) => setInput(e.target.value)} className='w-75'/>
        </div>  
        <button onClick = {() => addComment()} className='btn btn-secondary w-50' type='submit'>Review</button>
      </div>
      <div className="card-footer text-muted">
      <a  className="btn btn-outline-secondary Details_btn" onClick={()=>{
        navigate(-1);
      }}>Go Back</a>
      </div>
    </div>

</div>
    
  );
}

export default Details;
