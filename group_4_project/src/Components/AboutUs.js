import about from "../Img/about.jpg"

import '../App.css'

function Aboutus()
{

   return(
<div className="app">
   <div className="app">
   <h2 className="h" >About Us</h2>

   <img  className="item-img" src={about} width="100%" height="20%"/>
   </div>

<p>
The company mainly focuses on women's wear, and offers men's apparel, children's  accessories,  bags ,electronic device.
<br/> G mainly targets  Middle East along with other consumer markets. 

</p>
<section class="about">
<div className="main">
   
  {/* <img src={manuf}  /> */}
  
  <h5>Product Design</h5>
  <p> all starts when an idea, or a thought, is conceived by the designer..</p>
  <p>The life of a product begins even before the designer's pen hits the paper.</p>
</div>

<div className="about-t">
  <h5>customer service</h5>
  <p> You may have questions, but we've got you covered. Our team of customer service professionals <br/>can communicate with you in the following languages: Englishand Arabic.
</p>
  
</div>


   </section>




<a href="https://twitter.com/" class="u0 text-primary"> Twitter </a>  |
    <a href="https://www.instagram.com/" class="u0 text-primary"> Instagram</a>


</div>

   ) 


}
export default Aboutus

