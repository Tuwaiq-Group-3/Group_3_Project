import { useNavigate } from 'react-router-dom';
import jewellery from '../Img/jewellery.jpeg'
import { useNavigate } from 'react-router-dom';
import women from '../Img/women blouses.jpg'
import electronic from '../Img/electronic.jpg'
import menHeader from '../Img/menHeader2.png'
import wHeader from '../Img/wHeader.jpg'
import jHeader from '../Img/jHeader.jpg'
import online from '../Img/online.jpg'
import men from '../Img/men.jpeg'
import '../App.css';

const Home = ()=>{
  const navigate = useNavigate();
<<<<<<< HEAD
=======

>>>>>>> 2fd76e415ca1b61e5f9b8136f3f09a78f38c52c1

return (
<>

<div id="myCarousel" className="carousel slide pointer-event slideshow" data-bs-ride="carousel">
    <div className="carousel-indicators">
<<<<<<< HEAD
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
=======
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
>>>>>>> 2fd76e415ca1b61e5f9b8136f3f09a78f38c52c1
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="" ></button>
    </div>
    <div className="carousel-inner">
<<<<<<< HEAD
    <div className="carousel-item carousel-item-next carousel-item-start">
        <img className="d-block w-100 " src={online}  />
      </div>
      <div className="carousel-item">
      <img className="d-block w-100 " src={jHeader} />
      </div>
      <div className="carousel-item active carousel-item-start">
      <img className="d-block w-100" src={menHeader}/>
=======
      <div className="carousel-item carousel-item-next carousel-item-start">
        <img className="d-block w-100 " src={online}  />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 " src={jHeader} />
      </div>
      <div className="carousel-item active carousel-item-start">
        <img className="d-block w-100" src={menHeader}/>
>>>>>>> 2fd76e415ca1b61e5f9b8136f3f09a78f38c52c1
      </div>
      <div className="carousel-item" >
        <img className="d-block w-100" src={wHeader} />
        
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

<div>
    
    <div className='grid-container'>
    <img className='img womenImg' src={women} onClick={()=>{navigate("/products");}} />
    <img className='img menImg' src={men} onClick={()=>{navigate("/products");}} />
    <img className='img jewelleryImg' src={jewellery} onClick={()=>{navigate("/products");} }/>
    <img className='img electronicImg' src={electronic}  onClick={()=>{navigate("/products");}}/>
    </div>
    <p className='womenText'>Women Clothes </p>
    <p className='menText'>Men Clothes </p>
    <p className='jewelleryText'>Jewellery </p>
    <p className='electronicText'>Electronic </p>

</div>

</>
)

}

export default Home;