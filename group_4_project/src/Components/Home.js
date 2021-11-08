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


<div id="myCarousel" class="carousel slide pointer-event slideshow" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class="active" aria-current="true"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="d-block w-100 " src={online} width="130%" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 " src={jHeader} width="130%" />
      </div>
      <div class="carousel-item active carousel-item-start">
        <img class="d-block w-100" src={menHeader}width="130%"/>
      </div>
      <div class="carousel-item carousel-item-next carousel-item-start">
        <img class="d-block w-100" src={wHeader} width="80%"/>
        
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
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