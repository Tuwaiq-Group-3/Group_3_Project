import jewellery from '../Img/jewellery.jpeg'
import women from '../Img/women blouses.jpg'
import men from '../Img/men.jpeg'
import electronic from '../Img/electronic.jpg'
import menHeader from '../Img/menHeader2.png'
import wHeader from '../Img/wHeader.jpg'
import jHeader from '../Img/jHeader.jpg'
import online from '../Img/online.jpg'
import '../App.css';

const Home = ()=>{

return (
<>


<div id="myCarousel" className="carousel slide pointer-event slideshow" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <img className="d-block w-100 " src={online} width="130%" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 " src={jHeader} width="130%" />
      </div>
      <div className="carousel-item active carousel-item-start">
        <img className="d-block w-100" src={menHeader}width="130%"/>
      </div>
      <div className="carousel-item carousel-item-next carousel-item-start">
        <img className="d-block w-100" src={wHeader} width="80%"/>
        
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
    <img className='img womenImg' src={women}  />
    <img className='img menImg' src={men}  />
    <img className='img jewelleryImg' src={jewellery}  />
    <img className='img electronicImg' src={electronic}  />
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