import about from "../Img/about.jpg"
import q1 from "../Img/q1.jpg"
import inst from "../Img/inst.jpg"
import tw from "../Img/tw.png"
import face from "../Img/face.png"
import '../App.css'




function Aboutus()
{

   return(
<div className="app">
   <div className="app">
   <h2 className="h_about" >About Us</h2>

   <img  className="item-img" src={about} width="100%" height="20%"/>
   </div>

<p className="h_about">
The company mainly focuses on women's wear, and offers men's apparel, children's  accessories,  bags ,electronic device.
<br/> G mainly targets  Middle East along with other consumer markets. 

</p>
<hr />



<div className="app">
   <h2 className="h_about" > Quality Assurance</h2>

   <img  className="item-img" src={q1} />
   </div>

<p className="h_about">
Te carry out quality inspection of all of our products before officially introducing them to the market. We check for style, color, sizing, workmanship, and quality, etc.<br/>
 in order to eliminate any and all problems. We take measures to ensure that all of the cutting, sewing and ironing meet our quality requirements. There are ideal positions for each of these stages of production. Our workers follow guidebooks to ensure flawless appearance of the finalized product.





</p>



<hr/>

<div className="h_about">
<h3> contact</h3>
<a  href="https://twitter.com/" className="u0 text-primary">
    <img  className="item-size" src={tw} /> </a>  


  <a href="https://www.instagram.com/" className="u0 text-primary">
  <img  className="item-size" src={inst} /> 
  </a>

  <a href="https://www.facebook.com/" className="u0 text-primary">
  <img  className="item-sizze" src={face} /> 
  </a>
  </div> 
    </div>



   ) 


}
export default Aboutus

